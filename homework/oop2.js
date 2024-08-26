
// 1. Basic Class Creation Problem: Create a class named Book that represents a book and
// includes properties for title, author, and yearPublished. Add a method named
// getSummary() that returns a string containing the title, author, and year published.
class Book {
    title;
    author;
    yearPublished;

	constructor(title, author, yearPublished) {
		this.title = title;
		this.author = author;
		this.yearPublished = yearPublished;
    }

	getSummary(title, author, yearPublished) {
        return this.title, this.author, this.yearPublished
    }

    
}
const science = new Book("physics", "newton", "1945");
    console.log(science)



// 2. Define a class Rectangle that includes properties for width and height. Use a constructor
// to initialize these properties.
// a. Add a method calculateArea() to return the area of the rectangle
// b. Add method calculatePerimeter() to return the perimeter of the rectangle
class Rectangle{
    width;
    height;

    constructor(width, height) {
        this.width = width;
        this.height = height;
    } 
    calculateArea(){
        return this.width*this.height
    }  

    calculatePerimeter(){
        return 2*(this.width+this.height)
    }
}
const newRectangle = new Rectangle(3, 7);
console.log(newRectangle);
console.log(newRectangle.calculateArea());
console.log(newRectangle.calculatePerimeter());


// 3. Inheritance:
// a. Create a base class Vehicle with properties like make, model, and year, and a
// method getInfo(), which returns a string containing information about the vehicle.
// b. Create additional subclasses: Extend Vehicle with specific types of vehicles, for
// example, Car and Truck.
// i. Add specific properties or methods to these subclasses. For instance, a
// Truck class might have a loadCapacity property, and a Car might have a
// numDoors property.
// ii. Demonstrate polymorphism by overriding a method in a subclass. For
// instance, both Car and Truck could override getInfo() to include their
// specific information.

class Vehicle {
	year;
	make;
	model;
	constructor(year, make, model) {
		this.year = year;
		this.make = make;
		this.model = model;
	}
	getInfo() {
		return this.year + " " +this.make + " " + this.model
	}
}
// const CRV = new Vehicle("2020", "honda", "CRV");
// console.log(CRV);
// console.log(CRV.getInfo());

class Car extends Vehicle {
	numDoors;
	constructor(year, make, model, numDoors) {
		super(year, make, model); 
        this.numDoors = numDoors;
	}

    getInfo(){
        return this.year + " " +this.make + " " + this.model + " " + this.numDoors;
    }

}
const CRV = new Car("2020", "honda", "CRV", "4");
console.log(CRV.getInfo())

class Truck extends Vehicle {
	loadCapacity;
	constructor(year, make, model, loadCapacity) {
		super(year, make, model); 
        this.loadCapacity = loadCapacity;
	}
    getInfo(){
        return this.year + " " +this.make + " " + this.model + " " + this.loadCapacity;
    }
}
const RidgeLine = new Truck("2020", "honda", "Ridgeline", "4");
console.log(RidgeLine.getInfo())
// 4. Implement an Employee, CrewMember and Manager Class:

// Note: All properties in these classes should be private (use # to make a property
// private). Create methods to set and retrieve these properties.


// a. Create an Employee class with
// i. properties name, id, and email.
// ii. Include methods for basic employee behavior.
class Employee{
    #name;
    #id;
    #email;
    constructor(name, id, email){
        this.#name = name;
        this.#id = id;
        this.#email= email;
    }
    getName(){
        return this.#name
    }

    getId(){
        return this.#id
    }
    getEmail(){
        return this.#email
    }
}

// b. Create another class called CrewMember that extends Employee.
// i. CrewMember is a normal employee and should have a “manager”
// property that references the manager object.
// ii. Add methods to CrewMember for setting/getting the manager.


class CrewMember extends Employee{
    #manager;
    constructor(name, id, email, manager){
        super(name, id, email)
        this.#manager = manager;
    }
    getManager(){
        return this.#manager
    }
    setManager(manager){
        this.#manager = manager; 
    }
}


const manager = new Employee('Dave', 101, 'sarah@example.com'); 
const Emma = new CrewMember("Emma", 2,"emma@gmail.com");

CrewMember.setManager(manager); 
console.log(CrewMember.getName() + "'s manager is " + CrewMember.getManager().getName()); 


// c. Then, create a Manager class that extends Employee.
// i. Add a property “subordinates”, which is an array of Employee instances
// that the manager supervises.
// ii. Implement methods in Manager to add or remove employees from the
// subordinates list.

class Manager extends Employee{
    #subordinates;
    constructor(name, id, email){
        super(name, id, email);
        this.#subordinates = [];
    }

    addEmployee(employee){
        return this.#subordinates.push(employee)
    }

    removeSubordinates(employee){
        return this.#subordinates.filter(sub => sub !== employee);
    }

    getSubordinates() {
        return this.#subordinates;
    }   
}

const Binny = new Manager("Binny", 100, "binny@gmail.com");
// employee console
const Jenny = new Employee("Jenny", 1 ,"jenny@gmail.com");
console.log(Jenny);
console.log(Jenny.getEmail());

// const Emma = new CrewMember("Emma", 2,"emma@gmail.com");

manager.addSubordinate(Jenny);
manager.addSubordinate(Emma);

console.log(manager.getSubordinates().map(emp => emp.getName()));

manager.removeSubordinate(Jenny);
console.log(manager.getSubordinates().map(emp => emp.getName()));



// d. Use the classes to create a manager and 3 crew members.
// i. Set all 3 crew members’ manager property to the manager instance.
// ii. Add all 3 crew members to the manager’s subordinates list.
// employee consoles

// manager consoles
const Binny = new Manager("Binny", 100, "binny@gmail.com");

// crewmember
const Emma = new CrewMember("Emma", 2,"emma@gmail.com");
const David = new CrewMember("David", 3,"david@gmail.com");
const John = new CrewMember("John", 4,"john@gmail.com");

Emma.setManager(manager);
David.setManager(manager);
John.setManager(manager);

manager.addEmployee(Emma);
manager.addEmployee(David);
manager.addEmployee(John);

console.log(manager.getSubordinates().map(emp => emp.getName()));