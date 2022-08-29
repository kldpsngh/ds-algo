import { LinkedListNode } from "./linked-list";

export class ArrayAsQueue {
    arr: string[];

    constructor() {
        this.arr = [];
    }

    enqueue(data: string) {
        return this.arr.push(data);
    }

    dequeue() {
        return this.arr.shift();
    }

    isEmpty() {
        return this.size() === 0;
    }

    size() {
        return this.arr.length;
    }

    clear() {
        this.arr = [];
    }

    peek() {
        return this.arr[0];
    }
}

export class LinkedListAsQueue {
    head: LinkedListNode | null;
    tail: LinkedListNode | null;
    length: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(data: string) {
        let newNode = new LinkedListNode(data);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return;
        }
        this.tail!.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    dequeue() {
        if (this.isEmpty()) return null;
        let nodeToReturn = this.head;
        this.head = this.head!.next;
        this.length--;
        return nodeToReturn;
    }

    size() {
        return this.length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    peek() {
        return this.head;
    }

    clear() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
}
