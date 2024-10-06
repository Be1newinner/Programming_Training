const express = require("express");
const {
  registerUser,
  loginUser,
  authenticateToken,
} = require("../controllers/userController");



const router = express.Router();

// const registerUser1 = (req, res) => {
//   res.end("dafsdaf")
// }


router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/verify", authenticateToken);

module.exports = router;
