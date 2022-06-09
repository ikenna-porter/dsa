class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

//LIFO 
class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    push(value) {

        const node = new Node(value);

        if (this.length === 0) {
            this.first = node;
            this.last = node;
        } else {
            const previousFirst = this.first;
            this.first = node;
            node.next = previousFirst;
        }
        return ++this.length;
    }

    pop() {
        if (this.length === 0) return null;

        const previousFirst = this.first;
        if (this.length === 1) {
            this.first = null;
            this.last = null;
            return previousFirst;
        }

        this.first = previousFirst.next;
        // previousFirst.next = null; --Why shouldn't this be included?
        this.length--;
        return previousFirst.value;
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
console.log(stack);
