import { Component } from "react";

class LoginController extends Component {

    constructor() {
        super();
        this.state = {
            isLoggedIn: false
        }
    }

    login = () => {
        this.setState({
            isLoggedIn : true
        })
    }

    logout =  () => {
        this.setState({
            isLoggedIn : false
        })
    }

    render() {
        return (
            <div>
                <h2>Login Controller</h2>
                {
                    this.state.isLoggedIn === true
                        ? 
                        <>
                         <h2>Click here to logged out</h2>
                         <button onClick={this.logout}>Logout</button>
                        </>
                       
                        : <>
                         <h2>Please Login</h2>
                        <button onClick={this.login}>Login</button>
                        </>
                        
                        
                }
            </div>
        )
    }
}

export default LoginController;