const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const registerUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const newUser = new User({ username, password });
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (user && await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET);
      res.json({ token });
    } else {
      res.status(401).send('Invalid credentials');
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  registerUser,
  loginUser
};
