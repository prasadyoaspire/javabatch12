import { useState } from "react";
import axios from 'axios';
import './CreateProduct.css';

function CreateProduct() {

    const[pname,setPname] = useState('');
    const[price,setPrice] = useState('');
    const[category,setCategory] = useState('');

    const addProduct = () => {
        // calling api to save product
        const payload =   {          
            productName: pname,
            productPrice: price,
            category: category
          }
        axios.post("http://localhost:8081/product/save",payload).then(resp=>
        alert("Product created with id: "+resp.data.productId)
        )
    }

    return(
        <div>
            <h2>Add New Product</h2>

            <div className="form-group">
                <lable>Product Name</lable>
                <input type="text" name="pname" id="pname" className="form-control"
                value={pname} onChange={event=> setPname(event.target.value)}/>
            </div>
            <div className="form-group">
                <lable>Price</lable>
                <input type="number" name="price" id="price" className="form-control"
                value={price} onChange={event=> setPrice(event.target.value)}/>
            </div>
            <div className="form-group">
                <lable>Category</lable>
                <input type="text" name="category" id="category" className="form-control"
                value={category} onChange={event=>setCategory(event.target.value)}/>
            </div>

            <button onClick={addProduct} className="btn btn-primary">Save</button>

        </div>
    )
}

export default CreateProduct;