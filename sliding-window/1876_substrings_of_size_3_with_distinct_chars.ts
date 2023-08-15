import Scanner from "../readline";

export default class GoodSubstring {
    constructor() {}

    async main() {
        let scanner = new Scanner();
        let str: any = await scanner.readLine();
        let ans = this.countGoodSubstrings(str);
        console.log("ans = ", ans);
        scanner.close();
    }

    countGoodSubstrings(s: string): number {
        let k = 3;
        let i = 0,
            j = 0;
        let mp: Map<string, number> = new Map();
        let count = 0;

        while (j < s.length) {
            if (mp.has(s[j])) mp.set(s[j], mp.get(s[j])! + 1);
            else mp.set(s[j], 1);

            if (j - i + 1 < k) j++;
            else if (j - i + 1 === k) {
                if (mp.size === k) count++;
                //remove i
                let val = mp.get(s[i]) || 1;
                if (val === 1) mp.delete(s[i]);
                else mp.set(s[i], val - 1);

                //slide window
                i++;
                j++;
            }
        }

        return count;
    }
}
