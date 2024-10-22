/*#include<iostream>
using namespace std;

int main() {
    int m;
    
    // Ask the user for input
    cout << "Enter a number: ";
    cin >> m;
    
    int digits = 0;
    
    // Count the digits
    while(m > 0) {
        digits++;
        m = m / 10;
    }
    
    // Print the result
    cout << "The number of digits is: " << digits << endl;
    
    return 0;
}
*/


#include<iostream>
using namespace std;
int main(){
    int m;
    cin>>m;
    int sum=0;
    while(m>0){
        sum+=m%10;
        m=m/10;
        
    }
    cout<<"Sum of digits:"<<sum<<endl;
    return 0;
 
}