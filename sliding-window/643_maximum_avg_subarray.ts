import Scanner from "../readline";

export default class MaximumAverageSubarray {
    constructor() {}

    async main() {
        let scanner = new Scanner();
        let size: any = await scanner.readLine();
        size = parseInt(size);
        let arrElements: any = await scanner.readLine();
        arrElements = arrElements
            .trim()
            .split(" ")
            .map((i: string) => parseInt(i))
            .splice(0, size);
        let k: any = await scanner.readLine();
        k = parseInt(k);
        let ans = this.findMaxAverage(arrElements as number[], k as number);
        console.log("ans = ", ans);
        scanner.close();
    }

    findMaxAverage(nums: number[], k: number): number {
        let i = 0,
            j = 0;
        let maxAvg = Number.NEGATIVE_INFINITY;
        let sum: number = 0;
        let eleNum = 0;

        while (j < nums.length) {
            sum += nums[j];
            eleNum++;
            if (j - i + 1 < k) j++;
            else if (j - i + 1 === k) {
                maxAvg = Math.max(maxAvg, sum / eleNum);
                sum -= nums[i];
                eleNum--;
                i++;
                j++;
            }
        }

        return maxAvg;
    }
}
