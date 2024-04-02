import { useState } from 'react'

function Counter() {

    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    }
    const decrement = () => {
        setCounter(counter - 1);
    }

    return (
        <>
            <h2>Counter</h2>
            <h3>Counter = {counter}</h3>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </>
    )
}
export default Counter;