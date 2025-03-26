// // You are given an array prices where prices[i] is the price of a given stock on the ith day.

// // You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// // Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return
// var maxProfit = function (prices) {
//   let maxProfit = 0;
//   let buy = prices[0];
//   for (let i = 1; i < prices.length; i++) {
//     const sell = prices[i];
//     if (sell < buy) {
//       buy = sell;
//     } else {
//       maxProfit = Math.max(maxProfit, sell - buy);
//     }
//   }
//   return maxProfit;
// };

// prices = [7, 1, 5, 3, 9, 4];
// console.log(maxProfit(prices));

// //duplicates
// var containsDuplicate = function (nums) {
//   let duplicate = new Set(nums);
//   //any duplicate values
//   console.log(nums.length);
//   console.log(duplicate);

//   if (nums.length == duplicate.size) {
//     return false;
//   }

//   return true;
// };

// const nums = [1, 2, 3, 5, 8, 9, 9, 9, 9];

// console.log("contains duplicate", containsDuplicate(nums));

// max sub-array 53
var maxSubArray = function (nums) {
  let sum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    let current = 0;
    for (let j = i; j < nums.length; j++) {
      current += nums[j];
      console.log("current", current, i, j);
      sum = Math.max(sum, current);
      console.log("iterations", i, j);
    }
    console.log("sum", sum);
  }
  return sum;
};
nums = [5, 4, -1, 7, 8];
console.log(maxSubArray(nums));
