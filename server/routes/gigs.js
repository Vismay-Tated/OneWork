const express = require('express');
const router = express.Router();
const Gig = require('../models/Gig');

// CREATE A GIG (Client posts a job)
router.post('/create', async (req, res) => {
  try {
    const { title, description, budget, postedBy } = req.body;
    const newGig = new Gig({ title, description, budget, postedBy });
    await newGig.save();
    res.status(201).json({ message: 'Gig created successfully!', gig: newGig });
  } catch (error) {
    res.status(500).json({ message: 'Error creating gig' });
  }
});

// GET ALL OPEN GIGS (Freelancers look for work)
router.get('/all', async (req, res) => {
  try {
    // .populate() pulls in the name of the Client who posted it!
    const gigs = await Gig.find({ status: 'Open' }).populate('postedBy', 'name');
    res.status(200).json(gigs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching gigs' });
  }
});

module.exports = router;