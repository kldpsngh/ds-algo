import { HeapNode } from "./heap-node";
import { addElementWithPriority } from "./max-heap";

export function runMaxHeap() {
    let arr = [5, 70, 45, 24, 56, 21];
    let heapArray: [HeapNode] = [new HeapNode("2", 2)];
    arr.forEach((i) => {
        addElementWithPriority(heapArray, i.toString(), i);
    });

    heapArray.forEach((value, index) => {
        console.log("Value = ", value.data, " Index = ", index, " Priority = ", value.priority);
    });
}
