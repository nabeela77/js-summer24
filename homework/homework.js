// You are given a 0-indexed array of strings words and a character x. Return an
// array of indices representing the words that contain the character x. Note that
// the returned array may be in any order.

function findWordsContaining(words, x) {
  const indices = [];
  const lowerx = x.toLowerCase();
  for (let i = 0; i < words.length; i++) {
    if (words[i].toLowerCase().includes(lowerx)) {
      indices.push(i);
    }
  }
  return indices;
}
const words = ["Better", "ZOO", "ox"];
const x = "o";
console.log(findWordsContaining(words, x));
// You are given an array of strings names, and an array heights that consists of
// distinct positive integers. Both arrays are of length n. For each index i,
// names[i] and heights[i] denote the name and height of the ith person. Return
// names sorted in descending order by the people's heights.
