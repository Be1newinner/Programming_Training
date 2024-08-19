import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderDetails } from "../redux/actions/orderActions";
import { useParams } from "react-router-dom";

const OrderScreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  useEffect(() => {
    if (!order || order._id !== id) {
      dispatch(getOrderDetails(id));
    }
  }, [dispatch, id, order]);

  return loading ? (
    <p>Loading...</p>
  ) : error ? (
    <p className="text-red-500">{error}</p>
  ) : (
    <div className="max-w-4xl mx-auto mt-8 p-4">
      <h2 className="text-2xl font-semibold mb-6">Order {order._id}</h2>
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h3 className="text-lg font-medium mb-4">Shipping</h3>
        <p>
          <strong>Name:</strong> {order.user.name}
        </p>
        <p>
          <strong>Email:</strong> {order.user.email}
        </p>
        <p>
          <strong>Address:</strong> {order.shippingAddress.address},{" "}
          {order.shippingAddress.city}, {order.shippingAddress.postalCode},{" "}
          {order.shippingAddress.country}
        </p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h3 className="text-lg font-medium mb-4">Payment Method</h3>
        <p>
          <strong>Method:</strong> {order.paymentMethod}
        </p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h3 className="text-lg font-medium mb-4">Order Items</h3>
        <ul>
          {order.orderItems.map((item, index) => (
            <li key={index} className="flex justify-between mb-2">
              <p>{item.name}</p>
              <p>Qty: {item.qty}</p>
              <p>Price: ${item.price}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-lg font-medium mb-4">Order Summary</h3>
        <div className="flex justify-between mb-2">
          <span>Items:</span>
          <span>${order.itemsPrice}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Shipping:</span>
          <span>${order.shippingPrice}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Tax:</span>
          <span>${order.taxPrice}</span>
        </div>
        <div className="flex justify-between font-semibold text-lg">
          <span>Total:</span>
          <span>${order.totalPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderScreen;
