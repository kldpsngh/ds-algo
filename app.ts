import { quickSort } from "./sorting-algos/quick-sort";
import { radixSort } from "./sorting-algos/radix-sort";
import { LinkedList, LinkedListNode } from "./data-structures/linked-list";
import { DoublyLinkedList } from "./data-structures/doubly-linked-list";
import { ArrayAsStack, LinkedListAsStack } from "./data-structures/stack";

// let arr = [26,23,27,44,17,47,39,42,43,1];

// arr = radixSort(arr);

// console.log(arr);

// let ll = new DoublyLinkedList();

// ll.insertNode("1","END");
// ll.insertNode("2","END");
// ll.insertNode("3","END");
// ll.insertNode("4","END");
// ll.insertNode("5","END");
// ll.insertNode("0","BEGIN");
// ll.insertNode("4.5","RELATIVE",4);

// ll.removeNode("RELATIVE",5);
// ll.removeNode("RELATIVE",5);
// ll.removeNode("BEGIN");
// ll.removeNode("END");

// console.log(ll);

let s = new LinkedListAsStack();

s.push("a");
s.push("b");
s.push("c");

console.log("size = ", s.size());
console.log("peek = ", s.peek());
console.log("isEmpty = ", s.isEmpty());
console.log("Popped Element = ", s.pop());
console.log("peek = ", s.peek());

console.log("my");
