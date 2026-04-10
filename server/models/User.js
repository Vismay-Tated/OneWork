const mongoose = require('mongoose');

// This Schema is the rulebook for what a User can be
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['Client', 'Freelancer', 'Agency'], required: true }
});

// This turns the rulebook into an actual Model we can use to save/find data
module.exports = mongoose.model('User', userSchema);