import { useState } from 'react'
import { useSelector,useDispatch} from 'react-redux';
import { decrementByOne, incrementByOne } from '../store/actioncreators';

function Counter2() {

   const counter = useSelector(state=> state.counterReducer.counterValue);
   const dispatch = useDispatch();

    const increment = () => {
       // setCounter(counter + 1);

    //    dispatch({
    //     type : "INCREMENT"
    //    })

        dispatch(incrementByOne());
    }
    const decrement = () => {
       // setCounter(counter - 1);

    //    dispatch({
    //     type : "DECREMENT"
    //    })

    dispatch(decrementByOne());
    }

    return (
        <>
            <h2>Counter2 Redux</h2>
            <h3>Counter = {counter}</h3>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </>
    )
}
export default Counter2;