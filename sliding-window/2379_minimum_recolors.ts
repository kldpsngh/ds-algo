import Scanner from "../readline";

export default class MinimumRecolors {
    constructor() {}

    async main() {
        let scanner = new Scanner();
        let str: any = await scanner.readLine();
        let k: any = await scanner.readLine();
        k = parseInt(k);
        let ans = this.minimumRecolors(str, k);
        console.log("ans = ", ans);
        scanner.close();
    }

    minimumRecolors(blocks: string, k: number): number {
        let i = 0,
            j = 0;
        let min = Number.POSITIVE_INFINITY;
        let count = 0;
        while (j < blocks.length) {
            if (blocks[j] === "W") count++;
            if (j - i + 1 < k) j++;
            else if (j - i + 1 === k) {
                // check for the recoloring of current window and update answer accordingly
                min = Math.min(count, min);
                //remove calc of i..
                if (blocks[i] === "W") count--;
                i++;
                j++;
            }
        }
        return min;
    }
}
