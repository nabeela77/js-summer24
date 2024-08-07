// create an array
// const arrA = [];
// console.log(arrA);

// update an array
// arrA[1] = 999;
// arrA[2] = 999.5;
// arrA.push(1000, 1002, 1003);
// arrA.push([1004, 1005, 1006]);
// arrA[10] = {};
// arrA[1] = 999.3
// arrA[10] = {};creates object with {} index7,8,9 are empty


//  console.log(arrA[0]);
// console.log(arrA);
// console.log(arrA.length);

// const fruits = [];
// console.log(fruits);

// fruits[1] = "apple"
// fruits[2] = "banana"
// fruits[9] = "strawberry"
// fruits.push(["kiwi", "raspberry"])
// fruits[1] = "blueberry"
// console.log(fruits.length)

// console.log(fruits)

//  const itemsRemoved = fruits.pop();
// console.log(fruits);
// item = fruits.unshift("ube")
// const itm = fruits.shift()
// console.log(fruits)
// console.log(itm)

// function loopPrint(array){

// }

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function sumList(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        sum = sum + element;
    }
    console.log(sum)
}

sumList(nums)
sumList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])