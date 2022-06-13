class Node {
    constructor() {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
            return this;
        }

        let currentNode = this.root;

        while (currentNode) {
            if (value > currentNode.value) {
                if (!currentNode.right) {
                    currentNode.right = newNode;
                    return this;
                }
                currentNode = currentNode.right;
            } else {
                if (!currentNode.left) {
                    currentNode.left = newNode;
                    return this;
                }
                else currentNode = currentNode.left;
            }
        }
    }

    search(value) {
        if (!this.root) return false;

        let current = this.root;
        let found = false;

        while (current && !found) {
            if (value > current.value) {
                current = current.right;
            } else if (value < current.value) {
                current = current.left;
            } else {
                found = true;
            }
        }

        if (found) return this;
        else return undefined;
    }
}

