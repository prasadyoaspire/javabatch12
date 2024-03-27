import { useState } from "react";
import {Link} from 'react-router-dom';

function CounterHook() {

    const[counter,setCounter] = useState(0);

    const increment = () => {
        setCounter(counter+1);
    }

    const decrement = () => {
        setCounter(counter-1);
    }

    return (
        <div>
            <h2>Counter Hook</h2>
            <h3>Counter : {counter}</h3>
            <button onClick={increment} className="btn btn-primary">+</button>
            <button onClick={decrement} className="btn btn-secondary">-</button>
            <div>
                <Link to='/'>Back To Home</Link>
            </div>
        </div>
    )
}

export default CounterHook;