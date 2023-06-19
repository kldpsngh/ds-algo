export class Fibonacci {
    memo: number[];
    constructor() {
        this.memo = [];
    }

    getNumber(n: number) {
        if (n === 2 || n === 1) return 1;
        return this.getNumber(n - 1) + this.getNumber(n - 2);
    }

    //Memoization ... Top down approach ..
    getNumberMemoized(n: number) {
        if (n === 2 || n === 1) {
            this.memo[n] = 1;
            return this.memo[n];
        }
        if (this.memo[n]) return this.memo[n];

        let res = this.getNumberMemoized(n - 1)! + this.getNumberMemoized(n - 2)!;
        this.memo[n] = res;
        return this.memo[n];
    }
}
