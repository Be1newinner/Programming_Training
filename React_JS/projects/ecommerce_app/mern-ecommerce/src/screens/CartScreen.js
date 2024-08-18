import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { addToCart, removeFromCart } from "../redux/actions/cartActions";

const CartScreen = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const qty = new URLSearchParams(location.search).get("qty") || 1;

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, Number(qty)));
    }
  }, [dispatch, id, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    navigate("/login?redirect=shipping");
  };

  return (
    <div className="cart-screen">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>
          Your cart is empty <Link to="/">Go Back</Link>
        </p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.product} className="cart-item">
              <img src={item.image} alt={item.name} />
              <Link to={`/product/${item.product}`}>{item.name}</Link>
              <p>${item.price}</p>
              <input
                type="number"
                value={item.qty}
                onChange={(e) =>
                  dispatch(addToCart(item.product, Number(e.target.value)))
                }
              />
              <button
                type="button"
                onClick={() => removeFromCartHandler(item.product)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="cart-summary">
        <h3>
          Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items
        </h3>
        <p>
          $
          {cartItems
            .reduce((acc, item) => acc + item.qty * item.price, 0)
            .toFixed(2)}
        </p>
        <button
          type="button"
          disabled={cartItems.length === 0}
          onClick={checkoutHandler}
        >
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

export default CartScreen;
