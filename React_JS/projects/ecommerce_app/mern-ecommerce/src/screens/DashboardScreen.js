import React, { useEffect } from "react";
import { Link, useNavigation } from "react-router-dom";
import { useSelector } from "react-redux";

const DashboardScreen = () => {
  const history = useNavigation();
  const { userInfo } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (!userInfo) {
      history("/login");
    }
  }, [history, userInfo]);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Profile</h2>
          <Link to="/profile" className="text-indigo-600">
            Edit Profile
          </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Order History</h2>
          <Link to="/order-history" className="text-indigo-600">
            View Orders
          </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Saved Addresses</h2>
          <Link to="/saved-addresses" className="text-indigo-600">
            Manage Addresses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardScreen;
