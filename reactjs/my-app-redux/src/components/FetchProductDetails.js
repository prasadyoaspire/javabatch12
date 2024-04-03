import { useState,useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../store/productactions";

function FetchProductDetails() {

    const product = useSelector(state=>state.productReducer.product);

    const {id} = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductDetails(id));
    }, [])

    return(
        <div>
            <h2>Product Details</h2>
            {
                product !== null && 
                <div>
                    <p>Id :{product.productId} </p>
                    <p>Name : {product.productName}</p>
                    <p>Price : {product.productPrice}</p>
                    <p>Category :{product.category} </p>
                </div>
            }
        </div>
    )
}

export default FetchProductDetails;