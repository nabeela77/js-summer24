// // clockb class, comdidmount, compwillmount, tick, render, export 

import {Component} from 'react';

function FormattedDate({date}){
        return <h2> It is {date.toLocaleTimeString()}</h2>
}
class ClockB extends Component{
    constructor(props){
        super(props)
        this.state = {username: "John", date: new Date()}
    };
    
    componentDidMount(){
        this.timerID = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount(){
        clearInterval(this.timerID)
    }

    tick(){
        const newState = {date: new Date()}
        this.setState(newState)
    }
    render(){
        return(
            <div>
                <h1>Hello, I am {this.state.username} </h1>
                <FormattedDate date={this.state.date} />
            </div>
        )
    }

}

export default ClockB