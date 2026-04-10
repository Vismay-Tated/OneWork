const mongoose = require('mongoose');

const gigSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  budget: { type: Number, required: true },
  status: { type: String, enum: ['Open', 'In Progress', 'Completed'], default: 'Open' },
  
  // This links the gig to the specific Client who created it
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  
  // This links the gig to the Freelancer who accepts it
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null }
}, { timestamps: true });

module.exports = mongoose.model('Gig', gigSchema);