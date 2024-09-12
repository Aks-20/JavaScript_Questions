function bubbleSort(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) { // Run the inner loop until i
            if (arr[j] > arr[j + 1]) { // If left is greater than right
                // Swap the elements
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr; // Return the sorted array
}


arr=[5,4,3,2,1]
bubbleSort(arr)
console.log(arr);
//Time Complexity O(n^2)
//Space Complexity  O(1) /Constant // also called as Inplace Algorithms
//Swaps ->n^2

