// 1. Factorial Calculation: Write a function calculateFactorial(n) that takes a number n
// as input and returns the factorial of n.
// a. Ex: input: 5; output: 120 (5 * 4 * 3 * 2 * 1)

function factorial(num) {
    if (num < 0 ) return -1;
    if (num === 0 || num === 1 ) return 1;

    let output = num;
    for (let i = num - 1;i > 0; i--) {
         output = output * i;
        }
    return output;
}

console.log(factorial(5));

// Array Sum: Write a function sumArray(arr) that takes an array of numbers arr as
// input and returns the sum of all the numbers in the array.



function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum
}

function sumArray(arr) {
    let i = 0;
    while (i < array.length) {
        sum += array[i];
        i++;
    }
}

function sumArray(arr) {
    array.forEach((element) =>  {
        sum += element;
    });
    return sum;
}
console.log(sumArray[1,5,6])

// Reverse String: Write a function reverseString(str) that takes a string str as input 
// and returns the reverse of the string.
// a. Ex: input: “hello world”; output: “dlrow olleh”

function reverse(str) {
    let output = "";
    let i = str.length - 1;
    while (i >=0) {
        const letter = str[i];
        output += letter;
        i--;
    }
    return output;
}

console.log(reverse("hello world"));


// print hello each letter as string
function reverseArray(array) {
    let left =0;
    let right = array.length - 1;

    while (left < right) {
        let temp = array[left];//copy by value
        array[left] = array[right];// taakes o and places in first position
        array[right] = temp;//reassign h 
        left++;
        right--;
    }

    return array;
}
console.log(reverse("hello world"));
// Count Vowels: Write a function countVowels(str) that takes a string str as input
// and returns the number of vowels (a, e, i, o, u) in the string.
// a. Ex: input: “hello world”; output: 3 because “e”, “o”, “o” are vowels in the
// string

function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let vowNum = 0;
    
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            vowNum++;
        }
    }
    return vowNum;
}

let inputString = "hello world";
console.log(countVowels(inputString));
