import { shiftUp } from "./heap-functions";
import { HeapNode } from "./heap-node";

export function addElementWithPriority(heapArray: [HeapNode], element: string, priority: number) {
    heapArray.push(new HeapNode(element, priority));
    let latestIndex = heapArray.length - 1;
    //call shift Up..
    shiftUp(heapArray, latestIndex);
}

export function increasePriority(heapArray: [HeapNode], indexOfElement: number, newPriority: number) {}
