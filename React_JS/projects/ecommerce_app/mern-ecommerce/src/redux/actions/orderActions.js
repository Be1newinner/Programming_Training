export const ORDER_CREATE_REQUEST = "ORDER_CREATE_REQUEST";
export const ORDER_CREATE_SUCCESS = "ORDER_CREATE_SUCCESS";
export const ORDER_CREATE_FAIL = "ORDER_CREATE_FAIL";
export const ORDER_LIST_USER_REQUEST = "ORDER_LIST_USER_REQUEST";
export const ORDER_LIST_USER_SUCCESS = "ORDER_LIST_USER_SUCCESS";
export const ORDER_LIST_USER_FAIL = "ORDER_LIST_USER_FAIL";

export const createOrder = (order) => ({
  type: ORDER_CREATE_REQUEST,
  payload: order,
});

export const ORDER_DETAILS_REQUEST = "ORDER_DETAILS_REQUEST";
export const ORDER_DETAILS_SUCCESS = "ORDER_DETAILS_SUCCESS";
export const ORDER_DETAILS_FAIL = "ORDER_DETAILS_FAIL";

export const getOrderDetails = (id) => ({
  type: ORDER_DETAILS_REQUEST,
  payload: id,
});
