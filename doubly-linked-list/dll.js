class DoublyLinkedList {
    constructor() {
        this.head = head;
        this.tail = tail;
        this.length = 0;
    }

    push(value) {

        const node = new Node(value);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail.next.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) return undefined;
        const poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }

        this.length--;
        return poppedNode;
    }

    shift() {
        if (this.length === 0) return undefined;
        const removedNode = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = removedNode.next;
            removedNode.next = null;
            this.head.prev = null;
        }
        this.length--;
        return removedNode;
    }

    unshift(value) {
        const newNode = new Node(value);
        const oldHead = this.head;

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head = newNode;
            newNode.next = oldHead;
            oldHead.prev = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index > this.length) return undefined;

        if (this.index >= this.length / 2) {
            let counter = this.length - 1;
            let current = this.tail;
            let prev = this.tail.prev;

            while (counter > index) {
                current = prev;
                prev = current.prev;
                counter--;
            }
        } else {
            let counter = 0;
            let current = this.head;
            let next = this.head.next;

            while (counter < index) {
                current = next;
                next = current.next;
                counter++;
            }
        }
        return current;
    }

    set(index, value) {
        const node = this.get(index);
        if (node) {
            node.value = value;
            return true;
        }
        return false;
    }

    insert(index,)
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}