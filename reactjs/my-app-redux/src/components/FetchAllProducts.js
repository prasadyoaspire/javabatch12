
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProducts } from '../store/productactions';
import { Link } from 'react-router-dom';

function FetchAllProducts() {

    const productList = useSelector(state => state.productReducer.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts());
    }, [])

    return (
        <>
            <h2>All Products</h2>
            {
                productList.length > 0 &&

                productList.map(p =>
                    <p>{p.productId} {p.productName} {p.productPrice} {p.category} 
                    
                     - <Link to={`/products/details/${p.productId}`}>View</Link>
                    </p> 
                )
            }

        </>
    )
}

export default FetchAllProducts;