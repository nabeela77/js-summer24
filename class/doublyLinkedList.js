class Node {
	data;
	prev;
	next;
	constructor(data = undefined, prev = null, next = null) {
		this.data = data;
		this.prev = prev;
		this.next = next;
	}
}

class DoublyLinkedList {
	sentinel; // ptr to first node (does not count toward size)
	tail; // ptr to last node
	size;
	constructor(data = undefined) {
		this.sentinel = new Node();
		this.tail = this.sentinel;
		this.size = 0;

		// add data if provided
		if (data !== undefined) this.addLast(data);
	}

	getHead() {
		return this.sentinel.next;
	}

	getTail() {
		return this.tail;
	}

	print() {
		if (this.size === 0) {
			console.log("{ }", this.size);
			return;
		}

		let list = "{ ";
		let curr = this.getHead();
		while (curr !== null) {
			list += curr.data + " <-> ";
			curr = curr.next;
		}
		list = list + "null }";
		console.log(list, this.size);
	}

	printBackward() {
		if (this.size === 0) {
			console.log("{ }", this.size);
			return;
		}

		let list = "";
		let curr = this.getTail();
		while (curr.prev !== null && curr.prev.data !== undefined) {
			list = " <- " + curr.data + list;
			curr = curr.prev;
		}
		list = curr.data + list;
		list = "{ " + list + " }";
		console.log(list);
	}

	/**
	 * Add data to end of list.
	 * {} <-> {1} -> null
	 * {} <-> {1} <-> {2} -> null
	 * @param {*} data
	 * time: O(1)
	 */
	addLast(data) {
		const newNode = new Node(data, this.tail, null); // new node
		this.tail.next = newNode; // establish forward relationship
		this.tail = newNode; // maintain/reassign the last ptr to new node
		this.size++;
	}

	/**
	 *
	 * @returns
	 * time: O(1)
	 */
	removeLast() {
		if (this.size === 0) return null; // list is empty

		if (this.size === 1) {
			const removedNode = this.getHead();
			this.sentinel.next = null;
			this.size--;
			return removedNode.data;
		}

		const lastToRemove = this.getTail();
		const secondToLast = lastToRemove.prev;
		secondToLast.next = null;
		this.tail = secondToLast; // reassign new last node
		this.size--;
		return lastToRemove.data;
	}

	/**
	 * Add item to beginning of the list.
	 * @param {*} data
	 * {} <-> {N} <-> {1} <-> null
	 */
	addFirst(data) {
		if (this.size === 0) {
			this.addLast(data); // delegate to addLast to maintain last ptr
			return;
		}

		const currHead = this.getHead();
		const newNode = new Node(data, this.sentinel, currHead); // {} <-> {N} -> {1} <-> null
		this.sentinel.next = newNode;
		currHead.prev = newNode;
		this.size++;
	}

	// TODOS: Implement the methods below for the DoublyLinkedList class: removeFirst, remove, add, peekFirst, peekLast.
	// Provide the time complexity for each method.

	/**
	 * Remove the first item in the list and return it. Return null if list is empty.
	 * time complexity is o(1)
	 */
	removeFirst() {
		if (this.size === 0) return null;
		if (this.size === 1) {
			this.sentinel = this.sentinel;
			this.size--;
			// this.sentinel = null; alternative method throwing error
			// this.tail = null
		};
        this.sentinel = this.getHead().next;
		this.size--;

	}

	/**
	 * Remove item at the given index and return it if index is valid.
	 * time complexity is o(n)
	 * @param {*} index
	 */
	remove(index) {
		if (index === 0 || index >= this.size ) return null;
		if (index === 1 ) return this.removeFirst();
		if (index === this.size - 1) return this.removeLast();
        
		let curr = this.getHead();
		let i = 0;
		while (i < index){
			curr = curr.next
			i++;
		}
		if (curr.prev !== null) {
            curr.prev.next = curr.next;
        }
        if (curr.next !== null) {
            curr.next.prev = curr.prev;
        }
        this.size--;
        return curr.data;

	}

	/**
	 * Add the data at the specified index in the list. Return boolean true if successful, else false.
	 * time complexity is o(n)
	 * @param {*} index
	 * @param {*} data
	 */
	add(index, data) {
		if (index < 0 || index >= this.size ) return null;
		if (index === 1 ) return this.addFirst(data);
		if (index === this.size - 1) return this.addLast(data);

        const newNode = new Node(data);
		let curr = this.getHead();
		for (let i=0; i< index - 1; i++){
			if (i< index) curr.next;

			newNode.next = curr.next;
			newNode.prev = curr;
			curr.next.prev = newNode;
			curr.next = newNode;
			this.size++;
			return newNode;
		}
	}

	/**
	 * Return first item in list, without removing it.
	 * time complexity is o(1)
	 */
	peekFirst() {
		if (this.size === 0 ) return null;
		else return this.getHead().data;
	}

	/**
	 * Return last item in list, without removing it.
	 * time complexity is o(1)
	 */
	peekLast() {
		if (this.size === 0 ) return null;
		else return this.getTail().data;
	}
}

const lst = new DoublyLinkedList(0);
lst.addLast(3);
lst.addLast(5);
lst.addLast(7);
lst.print();
lst.printBackward();

lst.addFirst(-1);
lst.print();
lst.printBackward();
lst.removeFirst();
lst.print();
lst.peekFirst();
lst.print();
console.log('First value:', lst.peekFirst())
console.log('Last value:', lst.peekLast())
console.log('removed value:', lst.remove(2))
lst.print();
console.log('added value:', lst.add(0,10))
lst.print();
