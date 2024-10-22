/*#include<iostream>
using namespace std;
int main(){
    int n;
    cin>>n;
    int reverse=0;
    while(n>0){
        int lastdiigit=n%10;
        reverse=reverse*10+lastdiigit;
        n/=10;
    }
    cout<<"reverse"<<reverse<<endl;
    return 0;
}*/

#include<iostream>
using namespace std;

int main() {
    int m;
    cin >> m; // Input the value of m
    int result = 0;

    for(int i = 1; i <= m; i++) {
        if(i % 2 == 0) {
            result -= i; // Subtract if i is even
        } else {
            result += i; // Add if i is odd
        }
    }

    cout << "Result: " << result << endl; // Output the final result
    return 0;
}
