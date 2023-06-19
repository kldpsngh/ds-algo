export function solve(n: number) {
    let arr: number[] = [];
    for (let i = 0; i <= n - 1; i++) {
        arr[i] = 1;
        arr[i] = arr[i] * (n - i);
        arr[i] = arr[i] / (i + 1);
    }
    arr.shift();
    console.log(arr);
}
