import axios from "axios";
export const ADDRESS_LIST_USER_REQUEST = "ADDRESS_LIST_USER_REQUEST";
export const ADDRESS_LIST_USER_SUCCESS = "ADDRESS_LIST_USER_SUCCESS";
export const ADDRESS_LIST_USER_FAIL = "ADDRESS_LIST_USER_FAIL";
export const ADDRESS_ADD_REQUEST = "ADDRESS_ADD_REQUEST";
export const ADDRESS_ADD_SUCCESS = "ADDRESS_ADD_SUCCESS";
export const ADDRESS_ADD_FAIL = "ADDRESS_ADD_FAIL";
export const ADDRESS_DELETE_REQUEST = "ADDRESS_DELETE_REQUEST";
export const ADDRESS_DELETE_SUCCESS = "ADDRESS_DELETE_SUCCESS";
export const ADDRESS_DELETE_FAIL = "ADDRESS_DELETE_FAIL";

export const listUserAddresses = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ADDRESS_LIST_USER_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get("/api/addresses", config);

    dispatch({
      type: ADDRESS_LIST_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADDRESS_LIST_USER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addUserAddress = (address) => async (dispatch, getState) => {
  try {
    dispatch({ type: ADDRESS_ADD_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post("/api/addresses", address, config);

    dispatch({
      type: ADDRESS_ADD_SUCCESS,
      payload: data,
    });
    dispatch(listUserAddresses());
  } catch (error) {
    dispatch({
      type: ADDRESS_ADD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteUserAddress = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: ADDRESS_DELETE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`/api/addresses/${id}`, config);

    dispatch({
      type: ADDRESS_DELETE_SUCCESS,
    });
    dispatch(listUserAddresses());
  } catch (error) {
    dispatch({
      type: ADDRESS_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
