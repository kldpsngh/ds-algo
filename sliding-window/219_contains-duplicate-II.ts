/**
 * Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such
 * that nums[i] == nums[j] and abs(i - j) <= k.
 */

import Scanner from "../readline";

export default class ContainDuplicatesII {
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
        let ans = this.containsNearbyDuplicate(arrElements as number[], (k + 1) as number);
        console.log("ans = ", ans);
        scanner.close();
    }

    containsNearbyDuplicate(nums: number[], k: number): boolean {
        if (k == 1) return false;
        let i = 0,
            j = 0;
        let s: Set<number> = new Set();
        while (j < nums.length) {
            //some calculations
            if (s.has(nums[j])) return true;
            else s.add(nums[j]);
            if (j - i + 1 < k) {
                j++;
            } else if (j - i + 1 === k) {
                s.delete(nums[i]);
                //remove calc of i
                //slide the window
                i++;
                j++;
            }
        }
        return false;
    }
}
