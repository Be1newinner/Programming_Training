export const CART_ADD_ITEM = "CART_ADD_ITEM";
export const CART_REMOVE_ITEM = "CART_REMOVE_ITEM";
export const CART_SAVE_SHIPPING_ADDRESS = "CART_SAVE_SHIPPING_ADDRESS";
export const CART_SAVE_PAYMENT_METHOD = "CART_SAVE_PAYMENT_METHOD";

export const addToCart = (product, qty) => ({
  type: CART_ADD_ITEM,
  payload: {
    product: product._id,
    name: product.name,
    image: product.image,
    price: product.price,
    countInStock: product.countInStock,
    qty,
  },
});

export const removeFromCart = (id) => ({
  type: CART_REMOVE_ITEM,
  payload: id,
});

export const saveShippingAddress = (data) => ({
  type: CART_SAVE_SHIPPING_ADDRESS,
  payload: data,
});

export const savePaymentMethod = (data) => ({
  type: CART_SAVE_PAYMENT_METHOD,
  payload: data,
});
