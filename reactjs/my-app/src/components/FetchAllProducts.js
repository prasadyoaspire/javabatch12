
import React from 'react';
import axios from 'axios';

class FetchAllProducts extends React.Component {

    constructor() {
        super();
        this.state = {
            products :[]
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8081/product/all").then(resp => {
            this.setState({
                products : resp.data
            })
        })
    }

    render() {
        return(
            <div>
                <h2>Products</h2>
                {
                    this.state.products.map(p=> 
                        <div>{p.productId} {p.productName} {p.productPrice} {p.category}</div>
                    )
                }
            </div>
        )
    }
}

export default FetchAllProducts;