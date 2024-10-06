const express = require('express');
const { connectDB } = require('./config/db');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Connected to MongoDB
connectDB();

// Routes
app.use('/api', userRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
