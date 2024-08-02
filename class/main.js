// main.js
// camelCasing - camel casing (main casing we'll be using in JavaScript)
// kebob-casing - kebob casing
// snake_casing - snake casing

// JS/Python (interpreted language, interpreter program) -> interpreter executes the JS code line by line
// garbage collection: for memory management

// Java/C# (compiled / interpeted language) -> bytecode -> ported to differents computer (Java VM - Java only) -> executes intermediate bytecode or compiles into machine code -> runs it
// garbage collection: for memory management

// C/C++ (compiled) -> machine language (0,1) (x86) -> cpu executes/runs it
// No garbage collection - manual memory management
// Low energy cost / highly efficient / fast runtime / lower memory / low security and vulnerability

// ML framework runs on Python (Tensorflow, Pytorth, Scilearn, Numpy, Pandas)

var myFirstVariable = "hello world"
console.log(myFirstVariable);

myFirstVariable = 5;
console.log(myFirstVariable);
console.log(typeof myFirstVariable);

var myName = "nabeela";
var age = 10;
var active = true;
var membership;
var dateCreated = null;

console.log(typeof membership);
console.log(typeof age);
console.log(typeof active);
console.log(typeof dateCreated);

// other keywords for declaring variables - ES6
let x = 5; // 'let' allows for re-assignment
const y = 10; // 'const' does not allow for re-assignment

// reassign x, y with a diff value / diff data type
x = "nabeela";
// y = "nabeela";
let a; // declaring without assigning value
console.log(a); // 'let' also takes on undefined if not assigned a value
// const b; // declaring without assigning value

// re-declaring (using keyword 'var' 'let' 'const' again) vs re-assignment (only use '=')
// var greeting = "hi"
// var greeting = "hello"

// let salutation = "hi"
// let salutation = "hello"
