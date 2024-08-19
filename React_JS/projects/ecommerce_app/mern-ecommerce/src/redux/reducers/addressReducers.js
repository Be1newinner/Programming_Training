import {
  ADDRESS_LIST_USER_REQUEST,
  ADDRESS_LIST_USER_SUCCESS,
  ADDRESS_LIST_USER_FAIL,
  ADDRESS_ADD_REQUEST,
  ADDRESS_ADD_SUCCESS,
  ADDRESS_ADD_FAIL,
  ADDRESS_DELETE_REQUEST,
  ADDRESS_DELETE_SUCCESS,
  ADDRESS_DELETE_FAIL,
} from "../actions/addressActions";

export const addressListUserReducer = (state = { addresses: [] }, action) => {
  switch (action.type) {
    case ADDRESS_LIST_USER_REQUEST:
      return { loading: true };
    case ADDRESS_LIST_USER_SUCCESS:
      return { loading: false, addresses: action.payload };
    case ADDRESS_LIST_USER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const addressAddReducer = (state = {}, action) => {
  switch (action.type) {
    case ADDRESS_ADD_REQUEST:
      return { loading: true };
    case ADDRESS_ADD_SUCCESS:
      return { loading: false, success: true };
    case ADDRESS_ADD_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const addressDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case ADDRESS_DELETE_REQUEST:
      return { loading: true };
    case ADDRESS_DELETE_SUCCESS:
      return { loading: false, success: true };
    case ADDRESS_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
