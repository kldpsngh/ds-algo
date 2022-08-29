import { LinkedListNode } from "./linked-list";

export class ArrayAsStack {
    arr: string[];

    constructor() {
        this.arr = [];
    }

    push(data: string) {
        this.arr.push(data);
    }

    pop() {
        return this.arr.pop();
    }

    size() {
        return this.arr.length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    clear() {
        this.arr = [];
    }

    peek() {
        return this.arr[this.arr.length - 1];
    }
}

export class LinkedListAsStack {
    head: LinkedListNode | null;
    length: number;

    constructor() {
        this.head = null;
        this.length = 0;
    }

    //insert from start
    push(data: string) {
        let newNode = new LinkedListNode(data);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    //remove from start
    pop() {
        if (this.isEmpty()) return null;
        let nodeToReturn = this.head;
        this.head = this.head!.next;
        nodeToReturn && (nodeToReturn.next = null);
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
    }
}
