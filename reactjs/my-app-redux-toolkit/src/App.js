
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Counter from './features/counter/Counter';
import FetchAllProducts from './features/product/FetchAllProducts';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/counter" element={<Counter />} />         
          <Route path="/products/all" element={<FetchAllProducts />} />         
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
