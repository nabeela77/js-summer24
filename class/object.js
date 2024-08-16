// objects are a collection of <key: value> pairs separated by ,
// ORDER DOES NOT MATTER, WHAT MATTERS IS THE KEY VALUE
// don't get confused with these other notations/syntaxes
// function myFunc() {}
// const arr = () => {}
// create
const student1 = {
    firstName: "Anna",
    lastName: "Smith",
    email: "anna@gmail.com",
    phone: "111-111-1111",
    age: 15,
    isActive: true,
    address: {
        mailingAdress: "123 Main St",
        shippingAdress: "456 Wall St",
    },
    enrollment: ["cs101", "math01", "chem02"],
    gradYear: null,

    	// methods
	getName: function () {
		return this.getName;
	},

	// ES6 new notation does not need a ":" or "function" keyword
	// phoneType: "home", "cell"
	getPhone(phoneType) {
		return this.phone[phoneType];
	},

    // add course method
    addCourse: function (newCourse) {
        if (newCourse === '') return false;
        if (this.enrollment(newCourse)) return false;
        this.enrollment.push(newCourse);
        return true
    },
    // remove existing course
    // courseToRemove(enrollmentType) {
    //     delete student1.enrollment[0]
    //     return this.enrollment[enrollmentType]
    // },
};
student1.addCourse("lang03");

console.log(student1)

// console.log(student1.address)
// console.log(student1.address.mailingAdress)
// console.log(student1.address["shippingAdress"])

// console.log(student1["enrollment"])
// console.log(student1.enrollment[2])
// console.log(student1["enrollment"][0])

// console.log(student1)

// update

student1.address.shippingAdress = "4321 Wall St";
console.log(student1.address["shippingAdress"]);

student1.enrollment[2] = "bio101";
console.log(student1.enrollment[2]);

console.log(student1.enrollment)
console.log(student1.address)

student1.gradYear = "2025"
console.log(student1.gradYear)


// adding new properties
// Object.freeze(student1) for freezing whole object

student1.gpa = 4.0
console.log(student1.gpa)
console.log(student1)

// delete
delete student1.lastName;
console.log(student1)

// storing key value as function called as "method"
// this- has access to the key values and items of functions, objects and methods in which they are defined

student1.getEmail = function () {
    return this.email
}
console.log(student1.getEmail());

// method for mailing address

student1.getMailingAddress = function () {
	console.log("this from student object", this);
	return this.address.mailingAddress;
};

student1.address.getMailingAddress = function () {
	console.log("this from address object", this);
	return this.mailingAddress;
}
// console.log("address: ", student1.getMailingAddress());
// student1.address.getMailingAddress();    

// try this - with arrow function

// student1.getShippingAddress = () => {
// 	console.log("this from arrow function: ", this);
// 	return this.address.shippingAddress;
// };

// console.log(student1.getShippingAddress());

// globalThis and arrow functions

