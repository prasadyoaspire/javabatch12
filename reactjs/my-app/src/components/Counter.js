
import React from 'react';

class Counter extends React.Component {
    constructor() {
        console.log("constructor is called")
        super();
        this.state = {
            counter : 0
        }       
    }

    componentDidMount() {
        console.log("componentDidMount is called")
    }

    increment = () => {
        //updating state variable
        this.setState({
            counter : this.state.counter+1
        })
    }

    decrement = () => {
         //updating state variable
         this.setState({
            counter : this.state.counter-1
        })
    }

    render() {
        console.log("render method is called")
        return(
            <div>
                <h2>Counter Component</h2>
                <h3>Counter :{this.state.counter} </h3>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        )
    }
}

export default Counter;