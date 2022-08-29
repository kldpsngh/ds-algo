export function quickSort(arr: number[]) {
    quickSortHelper(arr, 0, arr.length - 1);
}

function quickSortHelper(arr: number[], left: number, right: number) {
    if (left < right) {
        let pivotPosition = findPivotPosition(arr, left, right);
        quickSortHelper(arr, left, pivotPosition - 1);
        quickSortHelper(arr, pivotPosition + 1, right);
    }
}

function swap(arr: number[], source: number, target: number) {
    let x = arr[source];
    arr[source] = arr[target];
    arr[target] = x;
}

//Space = O(Log n)
// time = O(n * Log n)
function findPivotPosition(arr: number[], left: number, right: number): number {
    let pivot = arr[left];
    let swapIdx = left;

    for (let i = left + 1; i <= right; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }

    //now swap pivot position and swapIdx;

    if (swapIdx !== left) {
        swap(arr, swapIdx, left);
    }

    return swapIdx;
}
