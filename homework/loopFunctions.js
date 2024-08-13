// 1. Factorial Calculation: Write a function calculateFactorial(n) that takes a number n
// as input and returns the factorial of n.
// a. Ex: input: 5; output: 120 (5 * 4 * 3 * 2 * 1)

function factorial(num) {
    let i = 1
    for (i <= num; i++;) {
        const fact = i*num
        
    }
    return fact
}

console.log(factorial(5))

// Array Sum: Write a function sumArray(arr) that takes an array of numbers arr as
// input and returns the sum of all the numbers in the array.



function sumArray(arr) {
    let sum = 0
    for (let i = 0; i <= arr.length; i++) {
        let add = arr[i]
        sum += add
    }
    return sum
}
console.log(sumArray[1,5,6])

// Reverse String: Write a function reverseString(str) that takes a string str as input 
// and returns the reverse of the string.
// a. Ex: input: “hello world”; output: “dlrow olleh”


// Count Vowels: Write a function countVowels(str) that takes a string str as input
// and returns the number of vowels (a, e, i, o, u) in the string.
// a. Ex: input: “hello world”; output: 3 because “e”, “o”, “o” are vowels in the
// string

function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let number = 0;
    
    for (let char of str) {
        if (vowels.includes(char)) {
            number++;
    }
    
    return number;
}
console.log(countVowels("ghost in the house"))