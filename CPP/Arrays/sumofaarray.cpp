/* 
#include<iostream>
using namespace std;
int main(){
    int arr[]={3,4,10,11};
    int size = sizeof(arr) / sizeof(arr[0]);
  int sum=0;
  for(int i=0;i<size;i++){
    sum+=arr[i];
  }
  cout<<"Sum of array of elements:"<<sum<<endl;
  return 0;
}*/
// using input array from user

#include<iostream>
using namespace std;
int main(){
  int size;
  cout<<"Enter the size of array: ";
  cin>>size;
  int arr[size];
  cout<<"Enter the elements of array: ";
  for(int i=0;i<size;i++){
    cin>>arr[i];
  }
  int sum=0;
  for(int i=0;i<size;i++){
    sum+=arr[i];
  }
  cout<<"Sum of array of elements:"<<sum<<endl;
  return 0;
}