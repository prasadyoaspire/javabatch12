import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function DeleteProduct() {

    const [product, setProduct] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8081/product/details/" + id)
            .then(resp => setProduct(resp.data));
    }, [])

    const onDelete = () => {
        axios.delete("http://localhost:8081/product/" + id)
        .then(resp=> {
            alert("Product deleted");
            navigate(-1);
        });
    }

    const onCancel = () => navigate(-1);
    
    return (
        <>
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

           <button onClick={onDelete} className="btn btn-primary">Delete</button>
           <button onClick = {onCancel} className="btn btn-info">Cancel</button>

        </>
    )
}
export default DeleteProduct;