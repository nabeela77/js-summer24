// {1} -> {3} -> {5} -> {10} -> {12} -> null
// {} -> {12}
class Node {
	val; // data to store in each node
	// prev;
	next; // a pointer referencing the next Node
	constructor(val = undefined, next = null) {
		this.val = val;
		this.next = next;
	}
}

// const n1 = new Node(1);
// const n5 = new Node(5);
// const n10 = new Node(10);
// n1.next = n5;
// n5.next = n10;
// const n3 = new Node(3);
// // added n3 between n1 and n5 in constant time (2 operations)
// n1.next = n3;
// n3.next = n5;
// console.log(n1);

// create a LinkedList DS
class LinkedList {
	sentinel; // ptr to first node
	size;
	constructor(val) {
		this.sentinel = new Node(); // create sentinel node
		this.size = 0;
		if (val) this.addLast(val);
	}

	getHead() {
		return this.sentinel.next;
	}

	print() {
		if (this.size === 0) {
			console.log("{ }", this.size);
			return;
		}

		let list = "{ ";
		let curr = this.getHead();
		while (curr !== null) {
			list += curr.val + " -> ";
			curr = curr.next;
		}
		list = list + "null }";
		console.log(list, this.size);
	}

	// if added, return true
	// {} -> {1} -> {3} -> {5} -> {10} -> {12} -> null
	// {} -> {1} -> {3} -> null
	addLast(val) {
		// adding when list is empty (sentinel does not count towards list size)
		if (this.size === 0) {
			this.sentinel.next = new Node(val);
			this.size++;
			return true;
		}

		// adding when list already has items
		let curr = this.getHead();
		while (curr.next != null) {
			curr = curr.next;
		}
		curr.next = new Node(val);
		this.size++;
		return true;
	}

	/**
	 * Remove the last item in the list and return it. Return null if list is empty.
	 */
	removeLast() {
		if (this.size === 0) return null; // list is empty

		if (this.size === 1) {
			const removed = this.getHead().val;
			this.sentinel.next = null;
			this.size--;
			return removed;
		}

		let curr = this.getHead();
		while (curr.next.next !== null) {
			curr = curr.next;
		}
		const removed = curr.next.val;
		curr.next = null;
		this.size--;
		return removed;
	}

	// TODOS: Implement the methods below for the LinkedList class: addFirst, removeFirst, add, contains, get, indexOf, peekFirst, peekLast.
	// Provide the time complexity for each method.

	/**
	 * Add val to beginning of the list.
	 * @param {*} val, time complexxity is o(1)
	 */
	addFirst(val) {
        if (this.size === 0) {
			this.sentinel.next = new Node(val);
			this.size++;
			return true;
		}
        const newNode = new Node(val);
        newNode.next = this.sentinel.next;
        this.sentinel.next = newNode;
        this.size++;
        return true;
    }

	/**
	 * Remove the first item in the list and return it. Return null if list is empty.
     * time complexity is o(1)
	 */
	removeFirst() {
        if (this.size === 0) return null;
        const remFirst = this.sentinel.next;
        this.sentinel.next = remFirst.next;
        if (this.size === 1) {
            this.size--;
            return remFirst; 
            }
            this.size--;
        return remFirst.data;    
        }

	/**
	 * Add the value (val) at the specified index in the list
	 * @param {*} index
	 * @param {*} val
	 */
	add(index, val) {
        if (index < 0 && index > this.size) return false;
        curr = this.getHead
        const newNode = new Node(val);
       
        };
    

	/**
	 * Check list for the target value. Return true if list contains target, else return false.
	 * @param {*} target - The target value to search for.
     * time complexity is o(n)
	 */
    contains(target) {
        for (let curr = this.getHead(); curr !== null; curr = curr.next) {
            if (curr.val === target) {
                return true;
            }
        }
        return false;
    }

	/**
	 * Return value at given index, else return undefined.
	 * @param {*} index
     * time complexity is o log(n)
	 */
	get(index) {
        if (index < 0 && index >= this.size) return false;
        let curr = this.head;
        let count = 0;
    
        while (curr) {
          if (count == index) {
            return curr
          }
          count++;
          curr = curr.next;
           
    }
    return ;
}

	/**
	 * Find the index of the target value. Return -1 if target is not found.
	 * @param {*} target
     * time complexity is o(n)
	 */
	indexOf(target) {
        let index = 0;
        for (let curr = this.getHead(); curr !== null; curr = curr.next) {
            if (curr.val === target) {
                return index; 
            }
            index++; 
        }
        return -1; 
    }

	/**
	 * Return first item in list, without removing it.
     * time complexity is o(1)
	 */
	peekFirst() {
        if (this.size === 0) return false;
        else {
            return this.getHead().val;
        }
    }

	/**
	 * Return last item in list, without removing it.
     * time complexity is o log(n)
	 */
	peekLast() {
        if (this.size === 0) return false;
        let curr = this.getHead();
        while (curr.next !== null) {
            curr = curr.next; 
        }
        return curr.val;
    }
}

//  alternate ways --------------------------------------------------

// {1} -> {3} -> {5} -> {10} -> {12} -> null
// {} -> {12}
class Node {
	val; // data to store in each node
	// prev;
	next; // a pointer referencing the next Node
	constructor(val = undefined, next = null) {
		this.val = val;
		this.next = next;
	}
}

// const n1 = new Node(1);
// const n5 = new Node(5);
// const n10 = new Node(10);
// n1.next = n5;
// n5.next = n10;
// const n3 = new Node(3);
// // added n3 between n1 and n5 in constant time (2 operations)
// n1.next = n3;
// n3.next = n5;
// console.log(n1);

// create a LinkedList DS
class LinkedList {
	sentinel; // ptr to first node
	size;
	constructor(val = undefined) {
		this.sentinel = new Node(); // create sentinel node
		this.size = 0;
		if (val !== undefined) this.addLast(val);
	}

	getHead() {
		return this.sentinel.next;
	}

	print() {
		if (this.size === 0) {
			console.log("{ }", this.size);
			return;
		}

		let list = "{ ";
		let curr = this.getHead();
		while (curr !== null) {
			list += curr.val + " -> ";
			curr = curr.next;
		}
		list = list + "null }";
		console.log(list, this.size);
	}

	// if added, return true
	// {} -> {1} -> {3} -> {5} -> {10} -> {12} -> null
	// {} -> {1} -> {3} -> null
	addLast(val) {
		// adding when list is empty (sentinel does not count towards list size)
		if (this.size === 0) {
			this.sentinel.next = new Node(val);
			this.size++;
			return true;
		}

		// adding when list already has items
		let curr = this.getHead();
		while (curr.next != null) {
			curr = curr.next;
		}
		curr.next = new Node(val);
		this.size++;
		return true;
	}

	/**
	 * Remove the last item in the list and return it. Return null if list is empty.
	 */
	removeLast() {
		if (this.size === 0) return null; // list is empty

		if (this.size === 1) {
			const removedNode = this.getHead();
			this.sentinel.next = null;
			this.size--;
			return removedNode.val;
		}

		let curr = this.getHead();
		while (curr.next.next !== null) {
			curr = curr.next;
		}
		const removed = curr.next.val;
		curr.next = null;
		this.size--;
		return removed;
	}

	// TODOS: Implement the methods below for the LinkedList class: addFirst, removeFirst, add, contains, get, indexOf, peekFirst, peekLast.
	// Provide the time complexity for each method.

	/**
	 * Add val to beginning of the list.
	 * {} -> {N} -> null
	 * {} -> {N} -> {1} -> {2}
	 * @param {*} val
	 * time: O(1)
	 */
	addFirst(val) {
		const newNode = new Node(val, this.getHead());
		this.sentinel.next = newNode;
		this.size++;
	}

	/**
	 * Remove the first item in the list and return it. Return null if list is empty.
	 * {} -> null
	 * {} -> {1} -> {2} -> null
	 * {} -> {1} -> null
	 * time: O(1)
	 */
	removeFirst() {
		if (this.size === 0) return null;
		const removedNode = this.getHead();
		this.sentinel.next = removedNode.next;
		this.size--;
		return removedNode.val;
	}

	/**
	 * Add the value (val) at the specified index in the list. Return boolean, true if successful, else false.
	 * @param {*} index
	 * @param {*} val
	 * {} -> null
	 * {} -> {1} -> {2} -> {3} -> {4} -> null
	 * time: O(N)
	 */
	add(index, val) {
		if (index < 0 || index > this.size) return false;

		let curr = this.sentinel;
		let i = 0;
		while (i < index) {
			curr = curr.next;
			i++;
		}

		const newNode = new Node(val, curr.next);
		curr.next = newNode;
		this.size++;
		return true;
	}

	/**
	 * Check list for the target value. Return true if list contains target, else return false.
	 * @param {*} target - The target value to search for.
	 * time: O(N)
	 */
	contains(target) {
		let curr = this.getHead();
		while (curr !== null) {
			if (curr.val === target) return true;
			curr = curr.next;
		}
		return false;
	}

	/**
	 * Return value at given index, else return undefined.
	 * @param {*} index
	 * time: O(N)
	 */
	get(index) {
		if (index < 0 || index >= this.size) return undefined;

		let curr = this.getHead();
		let i = 0;
		while (i < index) {
			curr = curr.next;
			i++;
		}
		return curr.val;
	}

	/**
	 * Find the index of the target value. Return -1 if target is not found.
	 * @param {*} target
	 */
	indexOf(target) {
		let curr = this.getHead();
        let index = 0;
        while (curr !== null) {
        if (curr.val === target) {
            return console.log("the index of target value is :",index);
        }
        curr = curr.next;
        index++;
	}

	/**
	 * Return first item in list, without removing it.
	 */
	peekFirst() {
		if (this.size === 0) return null;
        return this.getHead().val;
	}

	/**
	 * Return last item in list, without removing it.
	 */
	peekLast() {
		if (this.size === 0) return null;

        let curr = this.getHead();
        while (curr.next !== null) {
            curr = curr.next;
        }
        return curr.val;
	}
}

// const list = new LinkedList(1);
// list.addLast(3);
// list.add(2, 4);
// list.add(1, 2);
// list.addFirst(0);
// list.removeFirst();
// list.print();
// console.log(list.get(0));
// console.log(list.get(2));
// console.log(list.get(3));
// console.log(list.get(5));

const list = new LinkedList();
list.addLast(3);
list.addLast(5);
list.addLast(7);
list.print();
console.log(list.removeLast());
list.print();
list.addFirst(6);
list.print();
list.removeFirst();
list.print();
// list.add(2,15);
// list.print();
list.contains(100);
list.print();
list.get(3);
list.print();
list.indexOf(3);
list.print();
list.peekFirst();
list.print();
list.peekLast();
list.print();