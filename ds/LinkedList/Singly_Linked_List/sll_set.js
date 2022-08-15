class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	traverse() {
		let current = this.head;
		if (this.length === 0) return "Empty Linked List";
		let i = 0;
		while (i < this.length) {
			console.log(current.data);
			current = current.next;
			i++;
		}
	}
	push(data) {
		const newNode = new Node(data);
		if (this.head === null) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return true;
	}
	get(pos) {
		if (pos >= this.length || pos < 0) return null;
		let i = 0;
		let current = this.head;
		while (i !== pos) {
			current = current.next;
			i++;
		}
		return current;
	}
	set(pos, data) {
		let node = this.get(pos);
		if (!node) return false;
		node.data = data;
		return true;
	}
}

const sll = new SinglyLinkedList();
sll.push(10);
sll.push(20);
sll.push(30);
sll.push(40);
sll.traverse();
console.log();
console.log(sll.set(0, 5));
sll.traverse();
