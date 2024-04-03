
import axios from 'axios';

export function getAllProducts() {
    return (dispatch) => {
        return axios.get("http://localhost:8081/product/all")
        .then(resp=>dispatch(getAllProductsSuccess(resp.data)));
    }
}

export function getAllProductsSuccess(data) {
    return {
        type: "FETCH_PRODUCTS_SUCCESS",
        payload : data
    }
}

export function getProductDetails(productId) {
    return (dispatch) => {
        return axios.get("http://localhost:8081/product/details/"+productId)
        .then(resp=>dispatch(getProductSuccess(resp.data)));
    }
}

export function getProductSuccess(data) {
    return {
        type: "FETCH_PRODUCTDETAILS_SUCCESS",
        payload : data
    }
}