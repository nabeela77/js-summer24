// 1. Write a function called “add” that takes in 2 numbers and returns their added
// Value.
function add(num1, num2) {
    return num1 +num2;
}
console.log(add(5,2))


// 2. Write a function called “divide” that takes in 2 numbers and returns the divided
// value.
function divide(num1, num2) {
    return num1 / num2;
}
console.log(divide(4,2))

// 3. Write a function called “convert” that takes in a fahrenheit value and converts it
// into celsius. The formula for conversion is : Celsius = (Fahrenheit - 32) * 5/9
function convert(Fahrenheit) {
    Celsius = (Fahrenheit - 32) * 5/9
    return Celsius
}
console.log(convert(100))

// 4. Write a function called “divisibleBy55” that takes in a number and will return
// either true or false to let us know whether the number is divisible by 55 or not.
function divisibleBy55(num) {
    return num % 55 === 0
}
console.log(divisibleBy55(1))

// 5. Write a function called “checkLength” that takes in a string and return a number
// indicating the string’s length.
function checkLength(item) {
    return item.length 
}
console.log(checkLength("Nabela"))

// 6. Write a function called “concat” that takes in 2 strings and returns the
// concatenated string. Ex: “cat” and “dog” will return “cat dog”.
function concat(item1, item2){
    return item1 + " " + item2
}
console.log(concat("cat", "dog"))