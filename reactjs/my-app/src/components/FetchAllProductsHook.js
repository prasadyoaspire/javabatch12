
import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

function FetchAllProductsHook() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8081/product/all")
            .then(resp => setProducts(resp.data));
    }, [])

    return (
        <div>
            <h2>Fetch All Products Using Hooks</h2>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>Product Id</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        {/* <th>category</th> */}
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(p =>
                            <tr>
                                <td>{p.productId}</td>
                                <td>{p.productName}</td>
                                <td>{p.productPrice}</td>
                                {/* <td>{p.category}</td> */}
                                <td><Link to={`/product/details/${p.productId}`}>View</Link></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <Link to='/'>Back To Home</Link>
        </div>)
}

export default FetchAllProductsHook;