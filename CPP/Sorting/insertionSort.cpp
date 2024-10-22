#include<iostream>
#include<vector>

using namespace std;

void insertionSort(vector<int> &v) {
    int n = v.size();
    for (int i = 1; i < n; i++) {  // i should start from 1 since the first element is already "sorted"
        int current_ele = v[i];
        int j = i - 1;
        while (j >= 0 && v[j] > current_ele) {  // Change this condition to v[j] > current_ele
            v[j + 1] = v[j];
            j--;
        }
        v[j + 1] = current_ele;
    }
}

int main() {
    int n;
    cin >> n;
    vector<int> arr(n);
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    insertionSort(arr);
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
}
