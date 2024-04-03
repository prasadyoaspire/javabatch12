const initialState = {
    products: [],
    product : null,
}

export function productReducer(state = initialState, action) {

    if (action.type === 'FETCH_PRODUCTS_SUCCESS') {
        return {
            ...state,
            products: action.payload
        }
    }
    if (action.type === 'FETCH_PRODUCTDETAILS_SUCCESS') {
        return {
            ...state,
            product: action.payload
        }
    }
    else {
        return state;
    }
}