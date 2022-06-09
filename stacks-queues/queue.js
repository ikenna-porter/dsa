class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

//FIFO
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(value) {
        const node = new Node(value);

        if (this.size === 0) {
            this.first = node;
            this.last = node;
        } else {
            const previousLast = this.last;
            this.last = node;
            previousLast.next = node;
        }
        return ++this.size;
    }

    dequeue() {
        if (this.size === 0) return false;

        const previousFirst = this.first

        if (this.first === this.last) {
            this.last = null;
        }

        this.first = this.first.next;
        // this.first.next = null; --Why is this line unnecessary

        --this.size;
        return previousFirst;
    }
}