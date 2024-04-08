import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './counterSlice';

function Counter() {

    const counterValue = useSelector(state => state.counter.counterValue );
    const dispatch = useDispatch();

    const incrementByOne = () => {
        dispatch(increment());
    }

    const decrementByOne = () => {
        dispatch(decrement());
    }
   
    return(
        <>
        <h2>Counter Demo</h2>
        <h4>Counter :{counterValue } </h4>
        <button onClick={incrementByOne}>+</button>
        <button onClick={decrementByOne}>-</button>
        </>
    )
}

export default Counter;