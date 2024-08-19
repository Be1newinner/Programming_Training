import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "../redux/actions/cartActions";
import { useNavigate } from "react-router-dom";

const PaymentScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate("/placeorder");
  };

  return (
    <div className="payment-screen">
      <h2>Payment Method</h2>
      <form onSubmit={submitHandler}>
        <div>
          <input
            type="radio"
            id="PayPal"
            name="paymentMethod"
            value="PayPal"
            checked
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <label htmlFor="PayPal">PayPal</label>
        </div>
        <div>
          <input
            type="radio"
            id="Stripe"
            name="paymentMethod"
            value="Stripe"
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <label htmlFor="Stripe">Stripe</label>
        </div>
        <button type="submit">Continue</button>
      </form>
    </div>
  );
};

export default PaymentScreen;
