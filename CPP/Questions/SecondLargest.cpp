#include <iostream>
#include <climits> // For INT_MIN
using namespace std;

int largestElement(int array[], int size) {
    int max = INT_MIN;
    int maxIndex = -1;

    // Loop to find the largest element
    for (int i = 0; i < size; i++) {
        if (array[i] > max) {
            max = array[i];
            maxIndex = i; // Update the index of the maximum element
        }
    }

    return maxIndex;
}

int main() {
    int arr[] = {2, 3, 5, 7, 6, 1};
    int size = 6;

    // Find the index of the largest element
    int indexLargest = largestElement(arr, size);
    if (indexLargest != -1) {
        cout << "Largest element: " << arr[indexLargest] << endl;
        arr[indexLargest] = -1; // Mark the largest element as -1
    } else {
        cout << "No largest element found." << endl;
    }

    // Find the index of the second-largest element
    int indexSecondLargest = largestElement(arr, size);
    if (indexSecondLargest != -1) {
        cout << "Second largest element: " << arr[indexSecondLargest] << endl;
    } else {
        cout << "No second largest element found." << endl;
    }

    return 0;
}
