export class BinarySearchTreeNode {
    data: number;
    left: BinarySearchTreeNode | null;
    right: BinarySearchTreeNode | null;

    constructor(data: number) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

export class BinarySearchTree {
    root: BinarySearchTreeNode | null;

    constructor() {
        this.root = null;
    }

    insertNode(data: number) {
        let newNode = new BinarySearchTreeNode(data);
        if (!this.root) {
            this.root = newNode;
            return;
        }
        this.insertNodeHelper(this.root, newNode);
    }

    insertNodeHelper(root: BinarySearchTreeNode, newNode: BinarySearchTreeNode) {
        if (newNode.data < root.data) {
            //go to left
            if (!root.left) {
                root.left = newNode;
                return;
            }
            root = root.left;
            this.insertNodeHelper(root, newNode);
        }
        if (newNode.data >= root.data) {
            //go to right
            if (!root.right) {
                root.right = newNode;
                return;
            }
            root = root.right;
            this.insertNodeHelper(root, newNode);
        }
    }

    searchNode(root: BinarySearchTreeNode, dataToSearch: number) {}

    inorderTraversal(root: BinarySearchTreeNode | null) {
        if (root) {
            this.inorderTraversal(root.left);
            console.log("Node data = ", root.data);
            this.inorderTraversal(root.right);
        }
    }

    preOrderTraversal(root: BinarySearchTreeNode | null) {
        if (root) {
            console.log("Node Data = ", root.data);
            this.preOrderTraversal(root.left);
            this.preOrderTraversal(root.right);
        }
    }

    postOrderTraversal(root: BinarySearchTreeNode | null) {
        if (root) {
            this.postOrderTraversal(root.left);
            this.postOrderTraversal(root.right);
            console.log("Node Data = ", root.data);
        }
    }

    levelOrderTraversal(root: BinarySearchTreeNode | null) {}
}
