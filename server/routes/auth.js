const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// REGISTER ROUTE
// REGISTER ROUTE
router.post('/register', async (req, res) => {
  // TRAP 1: See if the data even reached the backend!
  console.log("🔥 Someone clicked register! Here is the data:", req.body);

  try {
    const { name, email, password, role } = req.body;
    
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("⚠️ Blocked: Email already exists.");
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword, role });

    await newUser.save();
    console.log("✅ SUCCESS: User saved to MongoDB!");
    res.status(201).json({ message: 'User registered successfully!' });

  } catch (error) {
    // TRAP 2: If MongoDB rejects the data, print the exact reason!
    console.error("❌ Mongoose Error Details:", error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// LOGIN ROUTE
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    
    if (!user) return res.status(404).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    // Give the user a "ticket" (JWT) to stay logged in
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET);
    
    res.status(200).json({ token, user: { id: user._id, name: user.name, role: user.role } });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;