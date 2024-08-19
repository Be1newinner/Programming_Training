import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderDetails } from "../redux/actions/orderActions";

const OrderDetailsScreen = ({ match }) => {
  const orderId = match.params.id;
  const dispatch = useDispatch();

  const { order, loading, error } = useSelector((state) => state.orderDetails);

  useEffect(() => {
    if (!order || order._id !== orderId) {
      dispatch(getOrderDetails(orderId));
    }
  }, [dispatch, orderId, order]);

  return (
    <div className="container mx-auto py-8">
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <div>
          <h1 className="text-3xl font-bold mb-6">Order {order._id}</h1>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Shipping</h2>
            <p>
              {order.shippingAddress.address}, {order.shippingAddress.city}{" "}
              {order.shippingAddress.postalCode},{" "}
              {order.shippingAddress.country}
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">Payment Method</h2>
            <p>{order.paymentMethod}</p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">Order Items</h2>
            <ul>
              {order.orderItems.map((item) => (
                <li key={item.product}>
                  {item.name} - {item.qty} x ${item.price} = $
                  {item.qty * item.price}
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-4">Order Summary</h2>
            <p>Items: ${order.itemsPrice}</p>
            <p>Shipping: ${order.shippingPrice}</p>
            <p>Tax: ${order.taxPrice}</p>
            <p>Total: ${order.totalPrice}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderDetailsScreen;
