const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const registerUser = async (req, res) => {
  const { username, password, email, fullname, phone } = req.body;
  try {
    const token = jwt.sign({ username }, process.env.JWT_SECRET);
    const newUser = new User({
      username,
      password,
      email,
      fullname,
      phone,
    });
    const user = await newUser.save();

    res.status(201).json({ error: "", token, user });
  } catch (err) {
    res.status(400).json({
      error: err.message,
      token: "",
      user: "",
    });
  }
};

const loginUser = async (req, res) => {
  const { username, email, password } = req.body;

  // Ensure that either username or email is provided
  if (!username && !email) {
    return res
      .status(400)
      .json({ error: "Username or email is required", token: "", user: "" });
  }

  try {
    const query = username ? { username } : { email };
    const user = await User.findOne(query, "-token -__v");

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { username: user.username },
        process.env.JWT_SECRET
      );
      res.json({ error: "", token, user });
    } else {
      res
        .status(401)
        .json({ error: "Invalid credentials", token: "", user: "" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message, token: "", user: "" });
  }
};

const authenticateToken = (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res
      .status(401)
      .json({ error: "No token provided", token: "", user: "" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.status(200).json({ error: "", token, user: decoded });
  } catch (err) {
    res.status(403).json({ error: "Invalid token", token: "", user: "" });
  }
};

module.exports = {
  registerUser,
  loginUser,
  authenticateToken,
};
