#include <iostream>
using namespace std;

int main() {
    int array[] = {3, 5, 2, 4, 7};
    int targetSum = 7;
    int size = sizeof(array) / sizeof(array[0]);

    int pairs = 0;

    // Iterate over each element in the array
    for (int i = 0; i < size; i++) {
        // Check for pairs with the subsequent elements
        for (int j = i + 1; j < size; j++) {
            if (array[i] + array[j] == targetSum) {
                pairs++;
            }
        }
    }

    // Output the number of pairs found
    cout << "Number of pairs with the given sum: " << pairs << endl;

    return 0;
}
