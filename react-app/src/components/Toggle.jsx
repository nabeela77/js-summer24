import { Component } from "react";

class Toggle extends Component {
	constructor(props) {
		super(props);
		this.state = { isToggleOn: true }; // default state
        
        //  binding "this"breferece to our class toggle
        // otherwise when we pass this to button onCLick handler, the "this" might be lost
        // we need this.setState to be invoked correctly
        this.handleClick = this.handleClick.bind(this) // bind has return of function
	}

    // onClick handler
    handleClick(e) {
        console.log("click event", e);

        this.setState((prevState) => ({ isToggleOn: !prevState.isToggleOn}));
    }
    render () {
        return (
            <div>
                <h1>
                {this.state.isToggleOn ? 
                "Toggle is on" : 
                "Toggle is off"} 
                </h1>
                <button type="button" onClick={this.handleClick}>
                {this.state.isToggleOn ? "ON" : "OFF"} 
                </button> 
            </div>
        );//anything in between tags is children, use {} to make it jsx
    }
}  

export default Toggle;

// const toggle = {
// 	handleClick: function () {
// 		this.setState();
// 	},

// 	setState: function () {
// 		console.log("set state from toggle component");
// 	},
// };

// function button(onClick, children) {
// 	const button = {
// 		children: children,
// 		// unbound will call: button.setState(), but this method is not defined
// 		// bound will call: toggle.setState(), this is okay, bcos setState is defined on "toggle" object
// 		onClick: onClick, // function() {this.setState()}
// 	};
// 	return button;
// }

// const button1 = button(toggle.handleClick, "ON");
// button1.onClick();