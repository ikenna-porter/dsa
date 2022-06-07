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

        this.tail = this.tail.prev;
        this.tail.next = undefined;
        this.length--;
    }

}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}