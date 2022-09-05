import { quickSort } from "./sorting-algos/quick-sort";
import { radixSort } from "./sorting-algos/radix-sort";
import { LinkedList, LinkedListNode } from "./data-structures/linked-list";
import { DoublyLinkedList } from "./data-structures/doubly-linked-list";
import { ArrayAsStack, LinkedListAsStack } from "./data-structures/stack";
import { ArrayAsQueue, LinkedListAsQueue } from "./data-structures/queue";
import { MaxHeap } from "./data-structures/heap";
import { Graph } from "./data-structures/graph";

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

// let s = new LinkedListAsStack();

// s.push("a");
// s.push("b");
// s.push("c");

// console.log("size = ", s.size());
// console.log("peek = ", s.peek());
// console.log("isEmpty = ", s.isEmpty());
// console.log("Popped Element = ", s.pop());
// console.log("peek = ", s.peek());

// let q = new LinkedListAsQueue();

// q.enqueue("a");
// q.enqueue("b");
// q.enqueue("c");
// q.enqueue("d");

// console.log("size = ", q.size());
// console.log("peek = ", q.peek());
// console.log("isEmpty = ", q.isEmpty());
// console.log("Popped Element = ", q.dequeue());
// console.log("Peek = ", q.peek());

// let h = new MaxHeap();

// h.insertNode("A",1);
// h.insertNode("B",3);
// h.insertNode("C",5);
// h.insertNode("D",6);
// h.insertNode("E",8);
// h.insertNode("F",11);
// h.insertNode("G",45);
// h.insertNode("H",90);
// h.insertNode("K",34);
// h.insertNode("L",89);

// console.log(h);

// console.log(h.removeNode());

// console.log(h);

let g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B", 4);
g.addEdge("A", "C", 2);
g.addEdge("E", "B", 3);
g.addEdge("C", "D", 2);
g.addEdge("D", "E", 3);
g.addEdge("D", "F", 1);
g.addEdge("C", "F", 4);
g.addEdge("F", "E", 1);

// g.removeEdge("D","F");
// g.removeVertex("D");

console.log(g.adjacencyList);

// console.log(g.dfs("A"));
console.log(g.bfs("A"));

// console.log(g.adjacencyList);

console.log("my");
