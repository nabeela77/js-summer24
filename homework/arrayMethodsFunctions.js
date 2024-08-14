// 1. Write a function that takes in an age (number). Check if the age is greater than or
// equal to 65 or not. If it is equal to or greater than 65 return the string “Special
// discount” otherwise return “Not Allowed”.
function ageCheck(age) {
    if(age >= 65) return "Special Discount"
    if(age < 65) return "Not Allowed"
}

// console.log(ageCheck(64));

// 2. Write a function that takes in an array of numbers and use the forEach() or map()
// to multiply every number by 100. The function should return a new array with the
// result. The original array should not be mutated.
function multiplyBy100(array) {
    const newArray = array.map(element => {
        return element * 100
    })
    return newArray
}
const arrayNum = [1,2,3,5,6]
// console.log(multiplyBy100(arrayNum))
// console.log(arrayNum)

// 3. Write a function that takes in an array of numbers and use the forEach() or map()
// to multiply every number by 100 if the array provided to the function has a length
// greater than 5. The function should return a new array with the result. The
// original array should not be mutated.
function multiplyBy100(array) {
    if (array.length <= 5) return "Cant progress"
    const newArray = array.map(element => {
        return element * 100
    })
    return newArray
}
// const arrayNumb = [1,2,3,5,6,8,9]
const arrayNumb = [1,2,3]
// console.log(multiplyBy100(arrayNumb))
// console.log(arrayNumb)

// 4. Write a function that takes in an array of numbers and uses the forEach() or
// map() to multiply every number by 100 only if the number is even - if the number
// is odd then it will return the original number . The function should return a new
// array with the result. The original array should not be mutated.
function multiplyBy100(array,element) {
    const newArray = array.map(element => {
        if (element % 2 === 1) return element
        return element * 100
    })
    return newArray
}
const arrayList = [1,2,3,5,6,8,9]
// const arrayList = [1,2,3]
// console.log(multiplyBy100(arrayList))
// console.log(arrayList)

// 5. Write a function that takes in this array as input [154, 657, 564, 561, 154, 678,
// 100, 154] and returns the number of times 154 occurred or existed in that array.

const repeat = [154, 657, 564, 561, 154, 678, 100, 154];
function repeatCount(target) {
    const repCount = repeat.filter((element) => element === target);
    return repCount.length;
}

// console.log(repeatCount(154));

// 6. Write a function that takes in an argument function checkType(input) - if the input
// is an array or javascript object then it returns the string “object” - otherwise it will
// return the string “It’s something else”.
function checkType(input) {
    if (typeof input === 'object') {
        return "object";
    } else {
        return "It's something else"
    }    
}
console.log(checkType(55))
console.log(checkType([1,2,3,4]))