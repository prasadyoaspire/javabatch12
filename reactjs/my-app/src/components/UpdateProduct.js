import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";


function UpdateProduct() {

    const [pid, setPid] = useState('');
    const [pname, setPname] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');

    const { id } = useParams();
    const navigate  = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8081/product/details/" + id)
            .then(resp => {
                setPid(resp.data.productId);
                setPname(resp.data.productName);
                setPrice(resp.data.productPrice);
                setCategory(resp.data.category);
            });
    }, [])

    const updateProduct = () => {

        const payload = {
            productId: pid,
            productName: pname,
            productPrice: price,
            category: category
        }

        axios.put("http://localhost:8081/product/update", payload)
            .then(resp => {
                alert("Product updated successfully");
                // navigate("/product/all");
                navigate(-1);
            })
    }

    return (
        <>
            <h2>Update Product Details</h2>

            <div className="form-group">
                <lable>ProductId</lable>
                <input type="text" name="pid" id="pid" className="form-control"
                    value={pid} onChange={event => setPid(event.target.value)} disabled />
            </div>

            <div className="form-group">
                <lable>Product Name</lable>
                <input type="text" name="pname" id="pname" className="form-control"
                    value={pname} onChange={event => setPname(event.target.value)} />
            </div>
            <div className="form-group">
                <lable>Price</lable>
                <input type="number" name="price" id="price" className="form-control"
                    value={price} onChange={event => setPrice(event.target.value)} />
            </div>
            <div className="form-group">
                <lable>Category</lable>
                <input type="text" name="category" id="category" className="form-control"
                    value={category} onChange={event => setCategory(event.target.value)} />
            </div>

            <button onClick={updateProduct} className="btn btn-primary">update</button>
        </>
    )
}

export default UpdateProduct;