// import { quickSort } from "./sorting-algos/quick-sort";
// import { radixSort } from "./sorting-algos/radix-sort";
// import { LinkedList, LinkedListNode } from "./data-structures/linked-list";
// import { DoublyLinkedList } from "./data-structures/doubly-linked-list";
// import { ArrayAsStack, LinkedListAsStack } from "./data-structures/stack";
// import { ArrayAsQueue, LinkedListAsQueue } from "./data-structures/queue";
// import { MaxHeap } from "./data-structures/heap";
// import { Graph } from "./data-structures/graph";
// import { Fibonacci } from "./dynamic-programming/fibonacci";
// import {solve} from "./dynamic-programming/test";
// import {main} from "./oops/inheritance";
// main();

// design patterns ...

// import Creator from "./design-patterns/factory/factory-concept";
// let PRODUCT = Creator.createObject('b');
// console.log(PRODUCT.name);

// import ChairFactory from "./design-patterns/factory/use-case/chair-factory";
// const CHAIR = ChairFactory.getChair("SmallChair");
// console.log(CHAIR.getDimensions());

// import AbstractFactory from "./design-patterns/abstract-factory/abstract-factory-concept";
// let PRODUCT = AbstractFactory.createObject('ab');
// console.log(PRODUCT)

// PRODUCT = AbstractFactory.createObject('bc')
// console.log(PRODUCT)

// import FurnitureFactory from "./design-patterns/abstract-factory/use-case/furniture-factory";
// let FURNITURE = FurnitureFactory.getFurniture("SmallChair");
// console.log(FURNITURE?.name);
// console.log(FURNITURE?.getDimensions());

// FURNITURE = FurnitureFactory.getFurniture("MediumTable");
// console.log(FURNITURE?.name);
// console.log(FURNITURE?.getDimensions());

// import Director from "./design-patterns/builder/builder-concept";
// const PRODUCT1 = Director.construct();
// console.log(PRODUCT1.parts);

// House Builder Example Code

// import IglooDirector from './design-patterns/builder/use-case/igloo-director';
// import CastleDirector from './design-patterns/builder/use-case/castle-director'
// import HouseBoatDirector from './design-patterns/builder/use-case/houseboat-director'

// const IGLOO = IglooDirector.construct()
// const CASTLE = CastleDirector.construct()
// const HOUSEBOAT = HouseBoatDirector.construct()

// console.log(IGLOO.construction())
// console.log(CASTLE.construction())
// console.log(HOUSEBOAT.construction())

// import Singleton from "./design-patterns/singleton/singleton-concept";
// const OBJECT1 = new Singleton(1);
// const OBJECT2 = new Singleton(2);
// console.log(OBJECT1 === OBJECT2);
// console.log(OBJECT1.id);
// console.log(OBJECT2.id);

// import Game1 from "./design-patterns/singleton/use-case/game1";
// import Game2 from "./design-patterns/singleton/use-case/game2";
// import Game3 from "./design-patterns/singleton/use-case/game3";

// // The Client
// // Despite all games instantiating a leaderboard, they all point
// // to the same memory object since the leaderboard is a singleton.
// const GAME1 = new Game1()
// GAME1.addWinner(2, 'Cosmo')

// const GAME2 = new Game2()
// GAME2.addWinner(3, 'Sean')

// const GAME3 = new Game3()
// GAME3.addWinner(1, 'Emmy')

// GAME1.leaderboard.print()
// GAME2.leaderboard.print()
// GAME3.leaderboard.print()

// import { Decorator, Component } from "./design-patterns/decorator/decorator-concept";
// const COMPONENT = new Component()
// console.log(COMPONENT.method());

// // The component can be decorated
// const Decorated = new Decorator(COMPONENT)
// console.log(Decorated.method());

// // The decorated component can be decorated again
// const Decorated2 = new Decorator(Decorated)
// console.log(Decorated2.method());

// import main from "./design-patterns/decorator/use-case/client";
// main();

// import main from "./design-patterns/adapter/use-case/client";
// main();

// import {SubSystemClassA,SubSystemClassB,SubSystemClassC,Facade} from "./design-patterns/facade/facade-concept";
// // Calling potentially complicated subsystems directly
// console.log(new SubSystemClassA().method())
// console.log(new SubSystemClassB().method('B'))
// console.log(new SubSystemClassC().method({ C: [1, 2, 3] }));

// // or using the simplified facade instead
// const FACADE = new Facade()
// console.log(FACADE.subSystemClassA())
// console.log(FACADE.subSystemClassB('B'))
// console.log(FACADE.subSystemClassC({ C: [1, 2, 3] }))

// import {facadeExample} from "./design-patterns/facade/use-case/client";
// facadeExample();

import { ChangeStream } from "mongodb";
import { clientCode } from "./design-patterns/observer/observer-concept";
clientCode();

//
// import Scanner from "./readline";

// async function main(){
//     const scanner = new Scanner();
//     for(let i = 0; i < 6; i++){
//         let str = await scanner.readLine();
//         console.log("You typed = ",str);
//     }
//     scanner.close();
// }
// main();

// solve(5);

// console.log("Answer = ",a);

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

// let g = new Graph();

// g.addVertex("A");
// g.addVertex("B");
// g.addVertex("C");
// g.addVertex("D");
// g.addVertex("E");
// g.addVertex("F");

// g.addEdge("A", "B", 4);
// g.addEdge("A", "C", 2);
// g.addEdge("E", "B", 3);
// g.addEdge("C", "D", 2);
// g.addEdge("D", "E", 3);
// g.addEdge("D", "F", 1);
// g.addEdge("C", "F", 4);
// g.addEdge("F", "E", 1);

// g.removeEdge("D","F");
// g.removeVertex("D");

// console.log(g.adjacencyList);

// console.log(g.dfs("A"));
// console.log(g.bfs("A"));

// console.log(g.adjacencyList);

// let f = new Fibonacci();

// console.log(f.getNumberMemoized(100));

// console.log("my");

// import MinimumRecolors from "./sliding-window/2379_minimum_recolors";
// new MinimumRecolors().main();
