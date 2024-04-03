import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Counter from './components/Counter';
import Counter2 from './components/Counter2';
import FetchAllProducts from './components/FetchAllProducts';
import FetchProductDetails from './components/FetchProductDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/counter" element={<Counter />} />
          <Route path="/counter2" element={<Counter2/>} />
          <Route path="/products/all" element={<FetchAllProducts/>} />
          <Route path="/products/details/:id" element={<FetchProductDetails/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
