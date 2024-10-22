#include <iostream>
using namespace std;
int main(){
    int array []={1,2,3,4,5};
    cout<<sizeof(array)<<endl;
      cout<<sizeof(array)/sizeof(array[0])<<endl;


      for(int ele:array){
        cout<<ele<<endl;
      }

int size = sizeof(array) / sizeof(array[0]); // Calculate the size of the array
    int index = 0;

    while (index < size) {
        cout << array[index] << endl; // Print the current element
        index++; // Move to the next index
    }

    return 0;
}