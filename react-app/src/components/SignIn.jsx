import { Component, createRef } from "react";

class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = { email: "", password: "" , rpassword:""};

		this.pwRef = createRef(); // a change in ref does not cause rerendering, whereas change in state and props does
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		console.log(event);
		const { id, value } = event.target;
		this.setState({
			[id]: value,
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		console.log(this.pwRef);
	}

	render() {
		const { email, password } = this.state;
		return (
			<form id="signin-container" onSubmit={this.handleSubmit}>
				<div id="title-container">
					<h1>Please sign in</h1>
				</div>
				<div id="input-container">
					<label id="email">
						Email:
						<input id="email" type="email" name="email" onChange={this.handleChange} value={email} />
					</label>

					<label id="password">
						Password:
						<input id="password" type="password" name="password"  onChange={this.handleChange} value={password} ref={this.pwRef} />
					</label>

                    <label id="rpassword">
						Re-enter Password:
						<input id="rpassword" type="password" name="rpassword" ref={this.pwRef} />
					</label>
				</div>

				<div id="submit-container">
					<button type="submit">Sign In</button>
				</div>
			</form>
		);
	}
}

export default SignIn;

// ref store infor across rendering




