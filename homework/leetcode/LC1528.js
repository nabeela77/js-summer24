function restoreString(s, indices) {
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    arr[indices[i]] = s[i];
  }
  return arr.join("");
}
const s = "codeleet";
const indices = [4, 5, 6, 7, 0, 2, 1, 3];

console.log(restoreString(s, indices));
