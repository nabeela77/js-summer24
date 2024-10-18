function firstPalindrome(words) {
  return words.find((str) => str === str.split("").reverse().join("")) || "";
}

const words = ["abc", "bob", "kayak", "ada"];
console.log(firstPalindrome(words));
