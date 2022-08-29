export function mergeSort(arr: number[]) {
    //This is a divide and conquer algorithm ...
    mergeSortHelper(0, arr.length - 1, arr);
}

function mergeSortHelper(lo: number, hi: number, arr: number[]) {
    if (lo < hi) {
        let middle = Math.floor((lo + hi) / 2);
        mergeSortHelper(lo, middle, arr);
        mergeSortHelper(middle + 1, hi, arr);
        mergeArrays(lo, hi, middle, arr);
    }
}

function mergeArrays(lo: number, hi: number, middle: number, arr: number[]) {
    let arr1: number[] = [];
    let arr2: number[] = [];

    for (let i = lo; i <= middle; i++) {
        arr1.push(arr[i]);
    }

    for (let i = middle + 1; i <= hi; i++) {
        arr2.push(arr[i]);
    }

    let i = 0,
        j = 0,
        k = lo;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) arr[k++] = arr1[i++];
        else arr[k++] = arr2[j++];
    }

    while (i < arr1.length) {
        arr[k++] = arr1[i++];
    }

    while (j < arr2.length) {
        arr[k++] = arr2[j++];
    }
}
