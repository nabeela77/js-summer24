import { Component } from "react";

// proper functional React component (should be in its own file)


function FormattedDate({date}) {
	return <h2>It is {date.toLocaleTimeString()}</h2>;
}
class Clock extends Component {
	constructor(props) {
		super(props);
		this.state = { username: "Terry", date: new Date() }; // assignment here is okay
	}

	// lifecycle method React will call when your component has just mounted to the DOM
	// set up any resources here
	componentDidMount() { // when component is mounted we can perform and write certain functions
		this.timerID = setInterval(() => this.tick(), 1000);
	}

	// lifecycle method React will call when your component is about to get unmounted from the DOM
	// remove / clean up any resources here
	componentWillUnmount() { // when component is about to be unmounted we can clear up the component
		clearInterval(this.timerID);
	}

	// this method updates our state object which will trigger a re-render by React automatically
	// perform a state update (the correct way by using this.setState())
	tick() {
		// this.state = { date: new Date()} // wrong way, cannot reassign
		// this.state.date = new Date() // also wrong way

		const newState = { date: new Date() };
		this.setState(newState); // NEED TO USE THIS METHOD TO UPDATE STATE
	}

	// the method that returns the JSX we want to display to the UI
	// React will also call this method on its own, we just need to define it, hence React is declarative
	render() {
		return (
			<div>
				<h1>Hello world. I'm {this.state.username}</h1>
                <FormattedDate  date={this.state.date} />
			</div>
		);
	}
}
//  2 things causes react to rerender, 1 when state changes. 2, when props changes
// props of component can be state
// never use this  in functions only use in class
// re-rendering happens on whole page in virtual js DOM, but update occurs on Chnaged DOM element with diffing process
// tick runs if rerendering happens even if we did not chnage state within the tick function
// never change state directly always set state
// each component returns one elemnt 
export default Clock;