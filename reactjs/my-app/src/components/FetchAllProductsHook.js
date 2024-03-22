
import { useState, useEffect } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';

function FetchAllProductsHook() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8081/product/all")
            .then(resp => setProducts(resp.data));
    },[])

    return (
        <div>
            <h2>Fetch All Products Using Hooks</h2>
            {
                products.map(p =>
                    <div>{p.productId} {p.productName} {p.productPrice} {p.category}</div>
                )
            }

            <Link to='/'>Back To Home</Link>
        </div>)
}

export default FetchAllProductsHook;