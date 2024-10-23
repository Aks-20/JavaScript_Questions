#include<iostream>
using namespace std;

void merge(int arr[], int l, int mid, int r) {
    int an = mid - l + 1;
    int bn = r - mid;

    // Temporary arrays
    int a[an], b[bn];

    // Copy data to temporary arrays a[] and b[]
    for (int i = 0; i < an; i++) {
        a[i] = arr[l + i];
    }
    for (int j = 0; j < bn; j++) {
        b[j] = arr[mid + 1 + j];
    }

    // Initial indexes of subarrays
    int i = 0, j = 0, k = l;

    // Merge the temp arrays back into arr[l..r]
    while (i < an && j < bn) {
        if (a[i] <= b[j]) {
            arr[k++] = a[i++];
        } else {
            arr[k++] = b[j++];
        }
    }

    // Copy the remaining elements of a[], if any
    while (i < an) {
        arr[k++] = a[i++];
    }

    // Copy the remaining elements of b[], if any
    while (j < bn) {
        arr[k++] = b[j++];
    }
}

void mergeSort(int arr[], int l, int r) {
    if (l >= r) {
        return;
    }
    
    int mid = l + (r - l) / 2;
    
    // Sort first and second halves
    mergeSort(arr, l, mid);
    mergeSort(arr, mid + 1, r);
    
    // Merge the sorted halves
    merge(arr, l, mid, r);
}

int main() {
    int arr[] = {10, 28, 24, 6, 34, 18, 38, 44};
    int n = sizeof(arr) / sizeof(arr[0]);

    mergeSort(arr, 0, n - 1);

    // Output the sorted array
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;

    return 0;
}
