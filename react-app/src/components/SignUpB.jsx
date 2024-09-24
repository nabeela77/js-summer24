import { useState } from "react";

const InitialFormState = {name:"", email:"", password:""};

export function SignUpB(){
   useState(InitialFormState);
  
    handleChange = (event) => {
		console.log(event);
		const { id, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
          }));
	}

	handleSubmit= (event) => {
		event.preventDefault();
		console.log("Form submitted:", formData);
	}
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

    )

};



function useCustomState(initialState){
const state = {initialState};
return [state.initialState, function(callback){}];
}



