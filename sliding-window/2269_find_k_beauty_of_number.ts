import Scanner from "../readline";

export default class KBeauty {
    constructor() {}

    async main() {
        let scanner = new Scanner();
        let num: any = await scanner.readLine();
        num = parseInt(num);
        let k: any = await scanner.readLine();
        k = parseInt(k);
        let ans = this.divisorSubstrings(num, k);
        console.log("ans = ", ans);
        scanner.close();
    }

    divisorSubstrings(num: number, k: number): number {
        let i = 0,
            j = 0;
        let str = num.toString();
        let len = str.length;
        let substr = "";
        let kbeauty = 0;
        while (j < len) {
            substr += str[j];
            if (j - i + 1 < k) j++;
            else if (j - i + 1 === k) {
                let a = parseInt(substr);
                if (a !== 0 && num % a === 0) kbeauty++;
                substr = substr.substring(1);
                i++;
                j++;
            }
        }
        return kbeauty;
    }
}
