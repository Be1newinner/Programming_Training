import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import PrivateRoute from "./components/PrivateRoute";
import ShopScreen from "./screens/ShopScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<ProfileScreen />} />
        </Route>
        <Route path="/shop" element={<ShopScreen />} />
        <Route path="/product/:id" element={<ProductScreen />} />
        <Route path="/cart/:id?" element={<CartScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
