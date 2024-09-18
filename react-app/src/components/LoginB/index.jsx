import { Component } from "react";
import GreetingB from "./GreetingB";

function LoginButton(props) {
	return (
		<button type="button" onClick={props.onClick}>
			Login
		</button>
	);
}

function LogoutButton(props) {
	return (
		<button type="button" onClick={props.onClick}>
			Logout
		</button>
	);
}

class LoginB extends Component {
	constructor(props) {
		super(props);
		this.state = { user: null };

		// bind callbacks
		this.handleLoginClick = this.handleLoginClick.bind(this);
		this.handleLogoutClick = this.handleLogoutClick.bind(this);
	}

	handleLoginClick() {
		const randomUser = {
			userId: 1,
			firstName: "Jack",
			email: "jack@email.com",
		};

		this.setState({ user: randomUser });
	}

	handleLogoutClick() {
		this.setState({ user: null });
	}

	render() {
		const { user } = this.state;
		return (
			<div>
				<GreetingB user={user} />
				{user ? <LogoutButton onClick={this.handleLogoutClick} /> : <LoginButton onClick={this.handleLoginClick} />}
			</div>
		);
	}
}

export default LoginB;

// to pass info down to children component we pass on with components and props.