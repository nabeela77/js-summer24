// 1. Find Maximum Value in an Array:
// Write a function findMax(arr) that takes an array of numbers arr as input and
// returns the maximum value in the array.

function findMax(arr) {
    let maxVal = arr[0]
    for (let i=0; i<arr.length; i++) {
       if (arr[i] > maxVal) {
        maxVal = arr[i];
       }
    }
    return maxVal;
}

console.log(findMax([1,3,50]))

// 2. Check Palindrome:
// Write a function isPalindrome(str) that takes a string str as input and returns true
// if the string is a palindrome (reads the same forwards and backwards), and false
// otherwise.
// Reversing letters in a palindrome still gives you the same word.
// Ex: “racecar” is a palindrome while “dog” is not a palindrome.

function isPalindrome(str) {
    let j = str.length - 1
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[j]) {
            return false;
        }
        j--;
    }
    return true;
}
    
let str1 = "racecar";
let str2 = "bank";
    
console.log(isPalindrome(str1));
console.log(isPalindrome(str2));

// 3. Count Characters:
// Write a function countCharacters(str, char) that takes a string str and a character
// char as input and returns the number of times char appears in str.

function countCharacters(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count
}
string = "counting repeated letters";
character = "e";
console.log(countCharacters(string, character));

// 4. Remove Duplicates from an Array:
// Write a function removeDuplicates(arr) that takes an array arr as input and
// returns a new array with duplicate elements removed, preserving the original
// order

function removeDuplicates(arr) {
    const newArr = [];
    return arr.map(element => {
      if (!newArr.includes(element)) {
        newArr.push(element);
        return element;
      }
      return undefined;
    }).filter(element => element !== undefined); 
}
const array = [1,2,3,3,3,4];
console.log(removeDuplicates(array))
// 5. Title Case Conversion:
// Write a function toTitleCase(str) that takes a string str as input and returns a new
// string where the first letter of each word is capitalized.
// Hint: Look into other useful String methods you can use.

function toTitleCase(str) {
    const words = str.split(' ');
    let result = '';
    words.forEach((word, index) => {
      if (word.length > 0) {
        const capitalizedWord = word[0].toUpperCase() + word.slice(1).toLowerCase();
        result += (index > 0 ? ' ' : '') + capitalizedWord;
      }
    });
    return result;
}
line = "this is my homework"
console.log(toTitleCase(line))

// 6. Concatenate Arrays:
// Write a function concatArrays(arr1, arr2) that takes two arrays arr1 and arr2 as
// input and returns a new array that concatenates the elements of both arrays.
function concatArrays(arr1, arr2) {
    let finalArr = [];
    arr1.forEach(element => {
        finalArr = finalArr.concat(element);
      });
      arr2.forEach(element => {
        finalArr = finalArr.concat(element);
      });
      return finalArr;
    }

arr1 = [1,2,3]    
arr2 = [5,4,6]
console.log(concatArrays(arr1, arr2))

// 7. Find Longest Word:
// Write a function longestWord(sentence) that takes a sentence as input and
// returns the longest word in the sentence.
function longestWord(sentence) {
    let longest = '';
    sentence.forEach(word => {
      if (word.length > longest.length) {
        longest = word;
      }
    });
    return longest;
};
const sentence = "Breakfast was good".split(" ")
console.log(longestWord(sentence))

// 8. Reverse Array:
// Write a function reverseArray(arr) that takes an array arr as input and returns a
// new array with the elements in reverse order.
// Do not use the reverse() method.
function reverseArray(array) {
  const newArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}

console.log(reverseArray([1,2,3,4]));