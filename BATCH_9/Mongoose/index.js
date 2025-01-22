const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());

try {
    mongoose.connect('mongodb+srv://manish_22:14ankBFPmrxtXoED@cluster0.cwy7m.mongodb.net/users')
    console.log('Connected to MongoDB');
} catch (error) {
    console.error('MongoDB connection error:', error)
}

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
