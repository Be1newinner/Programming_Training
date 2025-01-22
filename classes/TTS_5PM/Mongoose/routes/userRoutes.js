const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

// 1. Create a new user (POST /api/users)
router.post('/', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = new User({ name, email, password });
        await user.save();
        res.status(201).json(user);  // Created
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// 2. Get all users (GET /api/users)
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 3. Get a user by ID (GET /api/users/:id)
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id, { name: 1 }).byAge(5)
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 4. Update a user by ID (PUT /api/users/:id)
router.put('/:id', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { name, email, password });

        if (!updatedUser) return res.status(404).json({ message: 'User not found' });
        res.json(updatedUser);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 5. Delete a user by ID (DELETE /api/users/:id)
router.delete('/:id', async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) return res.status(404).json({ message: 'User not found' });
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
