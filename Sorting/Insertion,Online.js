// online Sorting Algorthmn n items are revealed one by one and have to be placed (immediately and irreevocably) into empty cells of size-n array
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let v = arr[i]; // The current element to be placed in the sorted part
        let j = i;
        // Shift elements of the sorted part that are greater than v to the right
        while (j > 0 && arr[j - 1] > v) {
            arr[j] = arr[j - 1];
            j=j-1
        }
        // Place v at its correct position
        arr[j] = v;
    }
}

let arr = [3, 1, 5, 7, 9, 10, 11];
insertionSort(arr);
console.log(arr); // Output: [1, 3, 5, 7, 9, 10, 11]
