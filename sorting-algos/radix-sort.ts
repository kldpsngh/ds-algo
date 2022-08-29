export function radixSort(arr: number[]) {
    return radixSortHelper(arr);
}

//time =  O(n * k) where k is the count of digits in largest number
//space = O(n + k)
function radixSortHelper(arr: number[]): any {
    //find max digit , the k value
    let k = getMaxDigitCount(arr);
    for (let i = 0; i < k; i++) {
        let buckets: any[] = Array.from({ length: 10 }, () => []);
        arr.forEach((j) => {
            buckets[getDigit(j, i)].push(j);
        });
        arr = [].concat(...buckets);
        // console.log("Array after recom = ",arr);
    }
    return arr;
}

function getDigit(num: number, place: number) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function getDigitCount(num: number) {
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function getMaxDigitCount(arr: number[]) {
    let max = 0;
    arr.forEach((i) => {
        max = Math.max(getDigitCount(i), max);
    });
    return max;
}
