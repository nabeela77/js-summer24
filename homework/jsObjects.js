// Write a function countWords(sentence) that takes a sentence as input and returns an
// object where each key is a word and its value is the count of that word in the sentence.
// Assume the sentence is a string of words separated by spaces.

function countWords(sentence) {
    wordCount = {};
    words = sentence.split(" ");
    
    
    for (let i=0; i < words.length; i++) {
        word = words[i]
        if (wordCount[word]) {
            wordCount[word]++
        } else {
            wordCount[word] = 1
        }
    }
    return wordCount
}

const sentence = "hello world hello"
console.log(countWords(sentence))


// Write a function updateInventory(inventory, newItems) that takes an inventory object
// where the key is the item name and the value is the quantity, and an array of new items
// to add to the inventory. The function should update the inventory with the new items and
// return the updated inventory.

function updateInventory(inventory, newItems) {

    newItems.forEach(item => {
        if (inventory[item]) {
            inventory[item] += 1;
        } else {
            inventory[item] = 1;
        }
    });
    return inventory;
}


const inventory = {"apples": 2, "bananas": 1}
const newItems = ["apples", "oranges", "apples"]
console.log(updateInventory(inventory, newItems))


// Grouping People by Age: Write a function groupPeopleByAge(people) that takes an
// array of objects, where each object represents a person with properties name and age.
// The function should return an object where each key is an age, and its value is an array
// of names of people with that age.



function groupPeopleByAge(people) {
    const ageGroups = {};
    people.forEach(person => {
        const { name, age } = person;
        const ageKey = age.toString();
        if (ageGroups[ageKey]) {

            ageGroups[ageKey].push(name);
        } else {
            
            ageGroups[ageKey] = [name];
        }
    });
    return ageGroups;
};
const people = [{ name: "John", age: 23 }, { name: "Amy", age: 25 }, { name:
"Cameron", age: 23 }]
console.log(groupPeopleByAge(people))


function countWords(sentence) {
	const words = sentence.split(" ");
	// const wordCount = {};

	// words.forEach((word) => {
	// 	if (word in wordCount) {
	// 		wordCount[word]++;
	// 	} else {
	// 		wordCount[word] = 1;
	// 	}
	// });

	const map = new Map();

	words.forEach((word) => {
		map.set(word, (map.get(word) || 0) + 1);
	});

	map.forEach((value, key) => {
		console.log([key, value]);
	});

	return map;
}
const sentence = "Hello World Welcome to Javascript to start";
// console.log(countWords(sentence));
