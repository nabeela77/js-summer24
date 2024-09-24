import ReactDOM from "react-dom/client";
import WelcomeDialog from "./components/WelcomeDialog";
import SplitPane from "./components/SplitPane";
import SignUp from "./components/SignUp";
import Clock from "./components/Clock";
import FancyBorder from "./components/WelcomeDialog/FancyBorder";
import Counter from "./components/Counter";
import { SignUpB } from "./components/SignUpB";
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
		<SignUpB />
);

// root.render(
// 	<div>
// 		<WelcomeDialog />
// 		<SplitPane
// 			left={
// 				<FancyBorder borderColor={"green"}>
// 					<Clock />
// 				</FancyBorder>
// 			}
// 			right={
// 				<FancyBorder borderColor={"red"}>
// 					<SignUp />
// 				</FancyBorder>
// 			}
// 		/>
// 	</div>
// );


