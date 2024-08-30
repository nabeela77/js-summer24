const user = {
	firstName: "Jack",
	lastName: "Sparrow",
	address: {
		// 10000
		mailingAddress: "123 Wall St.",
		shippingAddress: "321 Main St.",
	},
	courses: ["cs101", "math8"], // 10004
};

const class1 = "chem4";
const class2 = "bio5";

const {courses} = user
// const {courses: {class1: userclass1, class2 : userclass2}} = user
console.log(courses[0]);