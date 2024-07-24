const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  resume: { type: String },
  // Other profile fields
});

module.exports = mongoose.model('Profile', ProfileSchema);

