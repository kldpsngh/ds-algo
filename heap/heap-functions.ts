//getParent

import { HeapNode } from "./heap-node";

export function getParent(index: number) {
    if (index === 0) return index;
    return Math.floor((index - 1) / 2);
}

//getLeftChild
export function getLeftChild(index: number, heapArray: [HeapNode]) {
    if (2 * index + 1 >= heapArray.length) return -1;
    return 2 * index + 1;
}

//getRightChild
export function getRightChild(index: number, heapArray: [HeapNode]) {
    if (2 * index + 2 >= heapArray.length) return -1;
    return 2 * index + 2;
}

//swap
export function swap(targetIndex: number, sourceIndex: number, heapArray: HeapNode[]) {
    let temp = heapArray[targetIndex];
    heapArray[targetIndex] = heapArray[sourceIndex];
    heapArray[sourceIndex] = temp;
    return;
}

//shiftup
export function shiftUp(heapArray: [HeapNode], indexOfNewLeaf: number) {
    let parent = getParent(indexOfNewLeaf);
    if (parent === indexOfNewLeaf) return;
    if (heapArray[parent].priority < heapArray[indexOfNewLeaf].priority) {
        swap(parent, indexOfNewLeaf, heapArray);
        indexOfNewLeaf = parent;
        shiftUp(heapArray, indexOfNewLeaf);
    }
    return;
}

//shiftdown
export function shiftDown(heapArray: [HeapNode], rootIndex: number) {
    let leftChild = getLeftChild(rootIndex, heapArray);
    let rightChild = getRightChild(rootIndex, heapArray);
    if (leftChild !== -1 && rightChild !== -1) {
        //compare between left and right
        let highestIndex = -1;
        if (heapArray[leftChild].priority < heapArray[rightChild].priority) highestIndex = rightChild;
        else highestIndex = leftChild;
        if (highestIndex !== -1 && heapArray[rootIndex].priority < heapArray[highestIndex].priority) {
            swap(rootIndex, highestIndex, heapArray);
            rootIndex = highestIndex;
            shiftDown(heapArray, rootIndex);
        }
    } else if (leftChild !== -1) {
        //compare between current and right
        if (heapArray[rootIndex].priority < heapArray[rightChild].priority) {
            swap(rootIndex, rightChild, heapArray);
            rootIndex = rightChild;
            shiftDown(heapArray, rootIndex);
        }
    } else if (rightChild !== -1) {
        //compare between current and left..
        if (heapArray[rootIndex].priority < heapArray[leftChild].priority) {
            swap(rootIndex, leftChild, heapArray);
            rootIndex = leftChild;
            shiftDown(heapArray, rootIndex);
        }
    }
    return;
}

//decreaseKey
export function decreasePriority(heapArray: [HeapNode], indexOfElement: number, newPriority: number) {
    //O(Log n)
    // in case of max heap -> decrease Priority -> call shift down..
}

//increaseKey
export function increasePriority(heapArray: [HeapNode], indexOfElement: number, newPriority: number) {
    //O(Log n)
    //in case of max heap -> increase Priority -> call shift up
}

export function extractMax() {
    //O(Log n)
    //in case of Max Heap ... unshift 0 and shift Integer.MIN and then call shift down on first ele...
}
