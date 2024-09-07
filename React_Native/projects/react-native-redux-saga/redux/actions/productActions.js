import { FETCH_PRODUCT_FAILURE, FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS } from "../constants/productConstants"

export const fetchProductRequest = () => {
    return {
        type: FETCH_PRODUCT_REQUEST
    }
}
export const fetchProductSuccess = (data) => {
    return {
        type: FETCH_PRODUCT_SUCCESS, payload: data
    }
}
export const fetchProductFailure = (data) => {
    return {
        type: FETCH_PRODUCT_FAILURE, payload: data
    }
}


// FETCH_PRODUCT_REQUEST
// FETCH_PRODUCT_SUCCESS
// FETCH_PRODUCT_FAILURE