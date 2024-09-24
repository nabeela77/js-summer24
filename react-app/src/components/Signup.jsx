import { Component, createRef } from "react";
import "./SignUp.css";

class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = { name: "", email: "", password: "" };

		this.pwRef = createRef();
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
		alert("Submitting the form: " + JSON.stringify(this.state));
	}

	render() {
		console.log("state ", this.state);
		const { name, email, password } = this.state;

		const fields = [
			{
				id: "name",
				name: "name",
				type: "text",
				value: name,
				label: "Name: ",
			},
			{
				id: "email",
				name: "email",
				type: "email",
				value: email,
				label: "Email: ",
			},
			{
				id: "password",
				name: "password",
				type: "password",
				value: password,
				label: "Password: ",
			},
		];
		return (
			<form id="signup-form-container" onSubmit={this.handleSubmit}>
				<div id="title-container">
					<h1>Welcome to React!</h1>
				</div>

				{/* name, email, password */}
				<div id="signup-form-input-container">
					{fields.map(({ id, name, type, value, label }) => (
						<label id={id} key={id}>
							{label}
							<input id={id} type={type} name={name} onChange={this.handleChange} value={value} />
						</label>
					))}
				</div>

				<div id="signup-form-submit-container">
					<button type="submit">Create Account</button>
					{/* <button type="reset">Reset Fields</button> */}
				</div>
			</form>
		);
	}
}

export default SignUp;

// the ability to capture change state is only within class.
// any change in state should reflect in html element and any change in html element should reflect in state 

//   a controlled component is sync of react state and input element state, react has control over html element 




import { useState } from "react";

const InitialFormState = { name: "", email: "", password: "" };

export function SignUpB() {
  const [formData, setFormData] = useCustomState(InitialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button type="submit">Sign Up</button>
    </form>
  );
}

function useCustomState(initialState) {
  const [state, setState] = useState(initialState);

  const customSetState = (callback) => {
    if (typeof callback === 'function') {
      setState((prevState) => ({
        ...prevState,
        ...callback(prevState),
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        ...callback,
      }));
    }
  };

  return [state, customSetState];
}