export class DoublyLinkedListNode {
    data: string;
    prev: DoublyLinkedListNode | null;
    next: DoublyLinkedListNode | null;

    constructor(data: string) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

export class DoublyLinkedList {
    head: DoublyLinkedListNode | null;
    tail: DoublyLinkedListNode | null;
    length: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    //insert
    insertNode(dataOfNewNode: string, type: "BEGIN" | "END" | "RELATIVE", indexIfRelative?: number) {
        let newNode = new DoublyLinkedListNode(dataOfNewNode);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return;
        }

        if (type === "BEGIN") {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }

        if (type === "END") {
            this.tail!.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        if (type === "RELATIVE") {
            let existingNode = this.getNodeWithIndex(indexIfRelative!);
            if (!existingNode) return;
            let temp = existingNode.next;
            existingNode.next = newNode;
            newNode.prev = existingNode;
            newNode.next = temp;
            if (temp && temp.prev) temp.prev = newNode;
        }
        this.length++;
    }

    //remove
    removeNode(type: "BEGIN" | "END" | "RELATIVE", indexIfRelative?: number) {
        if (!this.head || !this.tail) return null;
        if (type === "BEGIN") {
            let nextNode = this.head.next;
            this.head.next = null;
            this.head = nextNode;
            this.head && (this.head.prev = null);
        }

        if (type === "END") {
            let prevNode = this.tail.prev;
            this.tail.prev = null;
            prevNode && (prevNode.next = null);
            this.tail = prevNode;
        }

        if (type === "RELATIVE") {
            let existingNode = this.getNodeWithIndex(indexIfRelative!);
            if (!existingNode) return null;
            let nextNode = existingNode.next;
            let prevNode = existingNode.prev;
            existingNode.prev = null;
            existingNode.next = null;
            nextNode && (nextNode.prev = prevNode);
            prevNode && (prevNode.next = nextNode);
            if (!nextNode) this.tail = prevNode;
        }
        this.length--;
    }

    getNodeWithIndex(index: number) {
        if (index > this.length && index < 0) return null;
        let startWithHead = true;
        //using properties of doubly linked list for optimization ..
        if (this.length - index < Math.floor(this.length / 2)) startWithHead = false;

        if (startWithHead) {
            let start = this.head;
            let i = 0;
            while (start) {
                if (i === index) return start;
                start = start.next;
                i++;
            }
        } else {
            let end = this.tail;
            let i = this.length - 1;
            while (end) {
                if (i === index) return end;
                end = end.prev;
                i--;
            }
        }
        return null;
    }

    getIndexOfNode(dataToFind: string) {
        let start = this.head;
        let index = -1;
        while (start) {
            if (start!.data === dataToFind) {
                return index;
            }
            index++;
            start = start.next;
        }
        return index;
    }
}
