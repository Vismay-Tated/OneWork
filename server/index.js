const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');
require('dotenv').config();

// Initialize Express
const app = express();
app.use(cors());
app.use(express.json()); // Allows us to parse JSON data from the frontend

// Initialize HTTP server and Socket.io for Real-Time Features
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // Default Vite port for your React frontend
    methods: ["GET", "POST"]
  }
});

// Database Connection
// IMPORTANT: Create a '.env' file in your server folder and add your MongoDB URL like this:
// MONGO_URI=mongodb+srv://<username>:<password>@cluster...
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/onework')
  .then(() => console.log('🔥 Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Basic Test Route
app.get('/', (req, res) => {
  res.send('OneWork API is running!');
});

// Real-Time Socket.io Logic
io.on('connection', (socket) => {
  console.log(`User Connected: ${socket.id}`);

  // Example: Listen for a new gig being posted
  socket.on('post_gig', (data) => {
    // Broadcast the new gig to all other connected users instantly
    socket.broadcast.emit('receive_new_gig', data);
  });

  socket.on('disconnect', () => {
    console.log('User Disconnected', socket.id);
  });
});

// Start the Server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 OneWork Server running on port ${PORT}`);
});