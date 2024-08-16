// Build a user object with the given properties and type:

// Properties:
// ● name: string,
// ● phone: object(home: string, cell: string),
// ● email: string, website: string,
// ● age: number, cart: [“grapes”]

const user1 = {
    // define your properties below:
    name: "Anne Smith",
    email: "anne@gmail.com",
    website: "www.anne.com",
    age: 20,
    phone: {
        home: "111-111-1111",
        cell: "222-222-2222"
    },
    cart: ["grapes"],

// ● getName() returns name
    getName: function () {
    return this.name;
},
    
// ● getPhone(phoneType: string) takes in a phone type key and returns the
// proper phone number
    getPhone(phoneType) {
    this.phone[phoneType];
    return this.phone
},

// ● getEmail() returns email
    getEmail: function () {
	return this.email;
},

// ● addToCart(item) adds the item to the cart array and returns a boolean to
// // indicate if successful or not
    addToCart: function (item) {
    this.cart.push(item);
    return true
},

// ● removeFromCart(item) remove the specified item from cart, 
    removeFromCart: function(item) {
        const index = this.cart.indexOf(item);
		if (index > -1) {
			this.cart.splice(index, 1);
			return true;
		}
		return false;
}, 

// ● addNewPhone(phoneType, phoneNumber) add the new phone number to
// the phone object (while keeping the current ones there)
    addNewPhone(phoneType, phoneNumber) {
        this.phone[phoneType] = phoneNumber;
        return this.phoneNumber;
    },

// ● updateNewPhone(phoneType, newPhoneNumber) update a certain phone
// number with the new phone number
updateNewPhone(phoneType, newPhoneNumber) {

}
}
console.log(user1.getName());
console.log(user1.getPhone());
console.log(user1.getEmail());
console.log(user1.addToCart("orange"));
console.log(user1.cart);
console.log(user1.removeFromCart("orange"))
console.log(user1.cart);

