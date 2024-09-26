import { useEffect, useState } from "react";

function FormattedDate(props) {
	return <h2>It is {props.date.toLocaleTimeString()}</h2>;
}

export default function ClockC() {
	// maintain state with hook
	const [date, setDate] = useState(new Date());

	function tick() {
		setDate(new Date());
        
	}

	function intervalCb() {
		tick(); 
	}
	// perform side effects with useEffect hook
	// equivalent to componentDidMount & componentWillUnmount
	useEffect(() => {
		console.log("useEffect: componentDidMount");
		const timerId = setInterval(intervalCb, 1000);

		return () => {
			console.log("useEffect: componentWillUnmount");
			clearInterval(timerId);
		};
	}, []);

	console.log("rendering");
	return (
		<div>
			<h1>Hello world</h1>
			<FormattedDate date={date} />
		</div>
	);
    
}
// jsx elements are immutable
// the dependency array tells useffect when to call the callback{} function again.
// 1. when dependecy array is not included the callback function 
// is called over again only if rerender occurs.
// when state change is not there it call backs once per rerender
// 2. when dependency array is empty callback function is called just once when component has mounted.
// 3. when dependency array has const variables(date) it calls the callback 
//   function based upon dependencies entered. In this callback changes state.
// 4.when dependency array has function in it , it will run based on stack, also reruns from top to bottom
//  making the funcional methods to be stored in different memory address