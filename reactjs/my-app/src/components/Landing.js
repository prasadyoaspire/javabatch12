
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <div>
            <h2>Landing Page</h2>
            <nav className="navbar navbar-expand-sm bg-light navbar-light">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to="/counter">Counter Page</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/product/all">Fetch All Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/product/add">Add New Product</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Landing;