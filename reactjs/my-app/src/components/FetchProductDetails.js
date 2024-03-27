import { useState,useEffect } from "react";

import axios from "axios";
import { useParams } from "react-router-dom";

function FetchProductDetails() {

    const[product, setProduct] = useState(null);

    const {id} = useParams();

    useEffect(() => {
        axios.get("http://localhost:8081/product/details/"+id)
            .then(resp => setProduct(resp.data));
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