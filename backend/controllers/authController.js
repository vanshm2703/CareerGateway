const User = require('../models/User');

const registerUser = async (req, res) => {
  const { auth0Id, email, role } = req.body;

  try {
    let user = await User.findOne({ auth0Id });

    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    user = new User({ auth0Id, email, role });
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { registerUser };
