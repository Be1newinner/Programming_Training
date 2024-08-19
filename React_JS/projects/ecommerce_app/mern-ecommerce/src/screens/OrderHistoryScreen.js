import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listUserOrders } from "../redux/actions/orderActions";

const OrderHistoryScreen = () => {
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector(
    (state) => state.orderListUser
  );

  useEffect(() => {
    dispatch(listUserOrders());
  }, [dispatch]);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Order History</h1>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Order ID</th>
              <th className="py-2 px-4 border-b">Date</th>
              <th className="py-2 px-4 border-b">Total</th>
              <th className="py-2 px-4 border-b">Paid</th>
              <th className="py-2 px-4 border-b">Delivered</th>
              <th className="py-2 px-4 border-b"></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td className="py-2 px-4 border-b">{order._id}</td>
                <td className="py-2 px-4 border-b">
                  {order.createdAt.substring(0, 10)}
                </td>
                <td className="py-2 px-4 border-b">${order.totalPrice}</td>
                <td className="py-2 px-4 border-b">
                  {order.isPaid ? "Yes" : "No"}
                </td>
                <td className="py-2 px-4 border-b">
                  {order.isDelivered ? "Yes" : "No"}
                </td>
                <td className="py-2 px-4 border-b">
                  <Link to={`/order/${order._id}`} className="text-indigo-600">
                    Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default OrderHistoryScreen;
