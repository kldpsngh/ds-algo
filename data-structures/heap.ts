export class HeapNode {
    data: string;
    priority: number;

    constructor(data: string, priority: number) {
        this.data = data;
        this.priority = priority;
    }
}

export class MaxHeap {
    heapArray: HeapNode[];

    constructor() {
        this.heapArray = [];
    }

    getLeftChild(parentIndex: number) {
        if (2 * parentIndex + 1 >= this.heapArray.length) return null;
        return 2 * parentIndex + 1;
    }

    getRightChild(parentIndex: number) {
        if (2 * parentIndex + 2 >= this.heapArray.length) return null;
        return 2 * parentIndex + 2;
    }

    getParent(childIndex: number) {
        if (childIndex === 0) return null;
        return Math.floor((childIndex - 1) / 2);
    }

    swap(sourceIndex: number, targetIndex: number) {
        let temp = this.heapArray[sourceIndex];
        this.heapArray[sourceIndex] = this.heapArray[targetIndex];
        this.heapArray[targetIndex] = temp;
    }

    //shift Up
    shiftUp(childIndex: number) {
        let parentIndex = this.getParent(childIndex);
        //check priority and swap if any changes...
        if (parentIndex !== null) {
            if (this.heapArray[parentIndex].priority < this.heapArray[childIndex].priority) {
                this.swap(parentIndex, childIndex);
                this.shiftUp(parentIndex);
            }
        }
    }

    //shift down
    shiftDown(parentIndex: number) {
        let leftChild = this.getLeftChild(parentIndex);
        let rightChild = this.getRightChild(parentIndex);
        let maxPriorityIndex = -1;
        if (leftChild !== null && rightChild !== null) {
            if (this.heapArray[leftChild].priority < this.heapArray[rightChild].priority) maxPriorityIndex = rightChild;
            else maxPriorityIndex = leftChild;
        }
        if (leftChild !== null && rightChild === null) {
            maxPriorityIndex = leftChild;
        }
        if (leftChild === null && rightChild !== null) {
            maxPriorityIndex = rightChild;
        }

        //compare with parent
        if (maxPriorityIndex !== -1) {
            if (this.heapArray[parentIndex].priority < this.heapArray[maxPriorityIndex].priority) {
                this.swap(parentIndex, maxPriorityIndex);
                this.shiftDown(maxPriorityIndex);
            }
        }
    }

    //insert Node
    insertNode(data: string, priority: number) {
        let newNode = new HeapNode(data, priority);
        this.heapArray.push(newNode);
        this.shiftUp(this.heapArray.length - 1);
    }

    //removeNode or extractMax
    removeNode() {
        if (this.heapArray.length === 0) return null;
        let maxPriorityNode = this.heapArray.shift();
        if (this.heapArray.length !== 0) {
            let nodeToReplace = this.heapArray.pop();
            this.heapArray.unshift(nodeToReplace!);
            this.shiftDown(0);
        }
        return maxPriorityNode;
    }

    //increase priority ...

    //decrease priority ...
}
