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
