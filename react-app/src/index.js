import ReactDOM from "react-dom/client";
import Clock from "./components/Clock";
// import Form from "./components/Form";
import "./index.css";
import React from 'react';
import Toggle from "./components/Toggle";
import ClockB from "./components/ClockB";
import Greeting  from "./components/Greeting";
import Login from "./components/Login";
import LoginB from "./components/LoginB";
import Accordion from "./components/Accordion";
// function Clock(props) {
// 	const time = new Date().toLocaleTimeString();

// 	const element = (
// 		<div>
// 			<h1>Hello world</h1>
// 			<h2>It is {time}</h2>
// 		</div>
// 	);
// 	return element;
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
		<Accordion />
);


