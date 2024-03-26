
import {Link} from 'react-router-dom';

function Landing() {
    return (
        <div>
            <h2>Landing Page</h2>
            <Link to="/counter">Counter Page</Link> <br></br> <br></br>
            <Link to="/product/all">Fetch All Products</Link><br></br><br></br>
            <Link to="/product/add">Add New Product</Link>
        </div>
    )
}

export default Landing;