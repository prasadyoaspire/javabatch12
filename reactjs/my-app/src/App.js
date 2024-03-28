import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Counter from './components/Counter';
import FetchAllProducts from './components/FetchAllProducts';
import Home from './components/Home';
import MailBox from './components/MailBox';
import LoginController from './components/LoginController';
import CounterHook from './components/CounterHook';
import FetchAllProductsHook from './components/FetchAllProductsHook';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Landing from './components/Landing';
import CreateProduct from './components/CreateProduct';
import FetchProductDetails from './components/FetchProductDetails';
import UpdateProduct from './components/UpdateProduct';
import DeleteProduct from './components/DeletProduct';
import CustomerFetchAllProducts from './components/CustomerFetchAllProducts';

function App() {

  const title = "EcomApp";
  return (
    <div className="App">
      {/* <Header apptitle={title} /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element= {<Landing/>} />
          <Route path="/counter" element={<CounterHook />} />
          <Route path="/product/all" element={<FetchAllProductsHook />} />
          <Route path="/product/add" element={<CreateProduct/>} />
          <Route path="/product/details/:id" element={<FetchProductDetails/>} />
          <Route path="/product/update/:id" element={<UpdateProduct/>} />
          <Route path="/product/delete/:id" element={<DeleteProduct/>} />
          <Route path="/customer/products" element={<CustomerFetchAllProducts/>} />
        </Routes>
      </BrowserRouter>
      
      {/* <Main/> */}
      {/* <Counter/> */}
      {/* <FetchAllProducts/> */}
      {/* <Home /> */}
      {/* <MailBox/> */}

      {/* <LoginController/> */}

      {/* <CounterHook/> */}

      {/* <FetchAllProductsHook/> */}

      {/* <Footer /> */}
    </div>
  );
}

export default App;
