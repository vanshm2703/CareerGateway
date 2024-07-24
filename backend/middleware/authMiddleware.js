const jwt = require('jsonwebtoken');
const jwksRsa = require('jwks-rsa');
const User = require('../models/User');

// Set up the JWKS client to retrieve signing keys from Auth0
const client = jwksRsa({
  cache: true,
  rateLimit: true,
  jwksRequestsPerMinute: 5,
  jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
});

// Function to retrieve the signing key
function getKey(header, callback) {
  client.getSigningKey(header.kid, function (err, key) {
    const signingKey = key.publicKey || key.rsaPublicKey;
    callback(null, signingKey);
  });
}

const authMiddleware = () => {
  return async (req, res, next) => {
    try {
      // Extract the token from the Authorization header
      const token = req.headers.authorization.split(' ')[1];

      // Verify the token
      jwt.verify(token, getKey, { audience: process.env.AUTH0_AUDIENCE, issuer: `https://${process.env.AUTH0_DOMAIN}/` }, async (err, decoded) => {
        if (err) {
          return res.status(401).json({ message: 'Unauthorized' });
        }

        // Find the user in your database
        const user = await User.findOne({ auth0Id: decoded.sub });

        if (!user) {
          return res.status(403).json({ message: 'Access forbidden' });
        }

        // Attach the user to the request object
        req.user = user;

        // Proceed to the next middleware or route handler
        next();
      });
    } catch (error) {
      res.status(401).json({ message: 'Unauthorized' });
    }
  };
};

module.exports = authMiddleware;
