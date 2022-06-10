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
}

