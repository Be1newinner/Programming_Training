import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import PrivateRoute from "./components/PrivateRoute";
import ShopScreen from "./screens/ShopScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import DashboardScreen from "./screens/DashboardScreen";
import OrderHistoryScreen from "./screens/OrderHistoryScreen";
import SavedAddressesScreen from "./screens/SavedAddressesScreen";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/dashboard" element={<DashboardScreen />} />
          <Route path="/order-history" component={OrderHistoryScreen} />
        </Route>
        <Route path="/" element={<ShopScreen />} />
        <Route path="/shop" element={<ShopScreen />} />
        <Route path="/product/:id" element={<ProductScreen />} />
        <Route path="/cart/:id?" element={<CartScreen />} />
        <Route path="/shipping" element={<ShippingScreen />} />
        <Route path="/payment" element={<PaymentScreen />} />
        <Route path="/placeorder" element={<PlaceOrderScreen />} />
        <Route path="/order/:id" element={<OrderScreen />} />
        <Route path="/saved-addresses" component={SavedAddressesScreen} />
      </Routes>
    </Router>
  );
};

export default App;
