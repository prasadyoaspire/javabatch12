import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Counter from './components/Counter';
import Counter2 from './components/Counter2';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/counter" element={<Counter />} />
          <Route path="/counter2" element={<Counter2/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
