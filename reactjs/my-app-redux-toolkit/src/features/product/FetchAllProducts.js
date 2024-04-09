import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getAllProducts } from './productSlice';

function FetchAllProducts() {

    const products = useSelector(state=> state.product.products);
    const status = useSelector(state=> state.product.status);
    const error = useSelector(state=> state.product.error);

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getAllProducts())
    },[])

    let element ;

    if(status === 'loading') {
       element = <h2> Loading .....</h2>
    }

    if(status === 'idle') {
        element = products.map(p=><div>
            <p>{p.productId} {p.productName} {p.productPrice}</p>
        </div>)
    }

    if(error !== null ) {
        element = <h3>{error}</h3>
    }

    return(
        <>
          {element}
        </>
    )
}

export default FetchAllProducts;