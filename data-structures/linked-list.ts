export class LinkedListNode {
    data: string;
    next: LinkedListNode | null;

    constructor(data: string) {
        this.data = data;
        this.next = null;
    }
}
export class LinkedList {
    head: LinkedListNode | null;
    tail: LinkedListNode | null;
    length: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    insertNode(place: "BEGIN" | "END" | "RELATIVE", dataOfNewNode: string, afterWhichElementInCaseOfRelative?: string) {
        let newNode = new LinkedListNode(dataOfNewNode);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return;
        }

        if (place === "BEGIN") {
            newNode.next = this.head;
            this.head = newNode;
        }
        if (place === "END") {
            this.tail!.next = newNode;
            this.tail = newNode;
        }
        if (place === "RELATIVE") {
            let findNodeOfPassedData = this.findNodeWithSpecificData(afterWhichElementInCaseOfRelative!);
            if (findNodeOfPassedData) {
                let tempNode = findNodeOfPassedData.next;
                findNodeOfPassedData.next = newNode;
                newNode.next = tempNode;
            }
        }

        this.length++;
    }

    //some things remain like updating tail ...
    removeNode(place: "BEGIN" | "END" | "RELATIVE", afterWhichElementInCaseOfRelative?: string) {
        if (this.head === null) return;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            this.length--;
            return;
        }

        if (place === "BEGIN") {
            this.head = this.head!.next;
        }
        if (place === "END") {
            let temp = this.head;
            // while(temp!.next !== this.tail && temp!.next!== null){
            //     temp = temp!.next;
            // }
            // if(temp!.next === this.tail){
            //     this.tail = temp;
            //     this.tail!.next = null;
            // }
            while (temp!.next !== this.tail) {
                temp = temp!.next;
            }
            temp!.next = null;
            this.tail = temp;
        }
        if (place === "RELATIVE") {
            let findNodeOfPassedData = this.findNodeWithSpecificData(afterWhichElementInCaseOfRelative!);
            if (findNodeOfPassedData) {
                let tempNode = findNodeOfPassedData.next;
                let tempNextNode = tempNode ? tempNode!.next : null;
                findNodeOfPassedData.next = tempNextNode;
                tempNode!.next ? tempNode : (tempNode!.next = null);
                if (findNodeOfPassedData.next === null) this.tail = findNodeOfPassedData;
                if (tempNextNode && tempNextNode!.next === null) this.tail = tempNextNode;
            }
        }

        this.length--;
    }

    //list is circular or not ...
    IsListCircular() {
        let circular = false;
        let visitedSet = new Set();
        let head = this.head;
        while (head !== null) {
            if (visitedSet.has(head)) return true;
            visitedSet.add(head);
            head = head.next;
        }
        return circular;
    }

    //list reversal ...
    reverseList() {
        if (!this.head) return;
        let current: LinkedListNode | null = this.head;
        let forward: LinkedListNode | null = current!.next;
        let previous: LinkedListNode | null = null;
        this.tail = current;
        while (true) {
            current!.next = previous;
            previous = current;
            current = forward;
            if (current === null) break;
            forward = forward!.next;
        }
        this.head = previous;
    }

    findNodeWithSpecificData(nodeData: string) {
        let head = this.head;
        while (head !== null) {
            if (head.data === nodeData) return head;
            head = head.next;
        }
        return null;
    }

    printLinkedList() {
        let head = this.head;
        while (head !== null) {
            console.log(head.data);
            head = head.next;
        }
    }
}
