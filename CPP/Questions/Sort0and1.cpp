#include <iostream>
#include <vector>
using namespace std;

void sortZeroesandOnes(vector<int>& v) {
    int zeroes_count = 0;
    // Count the number of zeroes
    for (int ele : v) {
        if (ele == 0) {
            zeroes_count++;
        }
    }
    // Set the first 'zeroes_count' elements to 0
    for (int i = 0; i < v.size(); i++) {
        if (i < zeroes_count) {
            v[i] = 0;
        } else {
            v[i] = 1;
        }
    }
}

int main() {
    int n;
    cout << "Enter the number of elements: ";
    cin >> n;
    vector<int> v;
    cout << "Enter the elements (0s and 1s only): ";
    for (int i = 0; i < n; i++) {
        int ele;
        cin >> ele;
        v.push_back(ele);
    }
    
    sortZeroesandOnes(v);
    
    cout << "Sorted array: ";
    for (int i = 0; i < n; i++) {
        cout << v[i] << " ";
    }
    cout << endl;

    return 0;
}
