const express = require("express");
const {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
} = require("../controllers/orderController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

// Create new order
router.route("/").post(protect, addOrderItems);

// Get logged in user's orders
router.route("/myorders").get(protect, getMyOrders);

// Get order by ID
router.route("/:id").get(protect, getOrderById);

// Update order to paid
router.route("/:id/pay").put(protect, updateOrderToPaid);

module.exports = router;
