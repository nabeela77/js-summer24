      // OOP Part 1: Constructor Functions

// 1. Write a constructor function for Animal with
// a. Properties: color, numOfEyes, numOfLegs
// b. Methods: eat, sleep - The methods can just console.log(<some message>).
// c. Then create 3 different instances of the Animal class and assign them to different
// variables

function Animal(color, numOfEyes, numOfLegs) {
		this.color = color;
        this.numOfEyes = numOfEyes;
        this.numOfLegs = numOfLegs;

        this.eat = function () {
            console.log("Animal eats")
        };

        this.sleep = function () {
            console.log("Animal sleeps")
        };
}

const cat = new Animal("cat", "2", "4");
const human = new Animal("human", "2", "2");
const dog = new Animal("dog", "2", "2");
console.log(human)


// 2. Write a constructor function for Bird with
// a. Properties: name, color, ableToFly
// b. Methods eat, sleep, getName and setName for retrieving and setting the name
// property
function Bird(name, color, ableToFly) {
    this.name = name;
    this.color = color;
    this.ableToFly = ableToFly;

    this.eat = function () {
        console.log("Bird eats")
    };

    this.sleep = function () {
        console.log("Bird sleeps")
    };

    this.getName = function() {
        console.log("The name is:", this.name)
    }

    this.setName = function(newName) {
        this.name = newName;
    }
}

const Bird1 = new Bird("hen", "white", "yes")
console.log(Bird1);
Bird1.getName();
Bird1.setName("pigeon");
console.log(Bird1);

        //  OOP Part 2: ES6 Class notation
// Note: Use ES6 class notation and ES6 method notation for all classes in this assignment.

// 1. Use the ES6 “class” keyword to create the Animal class with:
// a. Properties: name, color, numOfEyes, numOfLegs
// i. Make sure you list out the properties first then assign default values to
// them in your constructor function
// b. Methods: eat, sleep, walk, run
// i. The methods can just console.log() with your own custom string.
class Animal {
    name;
    color;
    numOfEyes;
    numOfLegs;

	constructor(name, color, numOfEyes, numOfLegs) {
		this.name = name;
		this.color = color;
		this.numOfEyes = numOfEyes;
        this.numOfLegs = numOfLegs;
    }

	eat() {
        console.log("Animal eats")
    }

    sleep() {
        console.log("Animal sleeps")
	}
    walk () {
        console.log("Animal walks")
	}
    run() {
        console.log("Animal runs")
	}
}
const cat = new Animal("cat", "black", "2", "4");
console.log(cat)

// 2. Use the Animal class you’ve created as a parent class to create a Bird class with:
// a. Properties: canFly
// i. Make sure to pass the other properties onto the parent constructor
// b. Methods: fly, peck
// i. The methods can just console.log() with your own custom string.

class Bird {
    name;
    color;
    canFly;

	constructor(name, color, canFly) {
		this.name = name;
		this.color = color;
		this.canFly = canFly;
    }

	fly() {
        console.log("This bird can fly")
    }

    peck() {
        console.log("This bird pecks")
	}

}
const crow = new Bird("crow", "black", "yes");
console.log(crow)


// 3. Use the Animal class you’ve created as parent class to create a Dog class with:
// a. Properties: breed (dog breed)
// i. Make sure the other animal properties are in the constructor and gets
// passed onto the parent constructor

// b. Methods: bark, dig
// i. The methods can just console.log() with your own custom string.

class Dog {
        breed;
        color;
        numOfEyes;
        numOfLegs;
    
    	constructor(breed, color, numOfEyes, numOfLegs) {
    		this.breed = breed;
    		this.color = color;
    		this.numOfEyes = numOfEyes;
            this.numOfLegs = numOfLegs;
        }
    
    	bark() {
            console.log("This dog barks")
        }
    
        dig() {
            console.log("This dog digs")
    	}

    }
    const germanShepard = new Dog("German Shepard", "brown", "2", "4");
    console.log(germanShepard)

