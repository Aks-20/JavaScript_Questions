/*#include <iostream>
using namespace std;
int main(){
    int apples;
    cin>>apples;
    cout<<"The Number of apples:"<<apples<<endl;
    return 0;
}

*/
#include<iostream>
using namespace std ;
int main(){
    int a;
     int b;
    int temp;
  
    cout<<"Enter two numbers"<<endl;  //taking inputs from user
      cin>>a;
    cin>>b;
    temp=a;
    a=b;
    b=temp;
    cout<<"After Swapping "  << a  << b <<endl;
    return 0;
    }