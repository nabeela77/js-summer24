import { Component } from "react";

function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
  }
  
  function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
  }

class Greeting extends Component{
    constructor(props){
        super(props)
    }


    render () {
        const {user} = this.props
        return (
            <div>
                <h1>
                {this.props.user ? 
                UserGreeting: 
                GuestGreeting} 
                </h1>
            </div>
        );
}};

export default Greeting;
