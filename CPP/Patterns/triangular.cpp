/*#include<iostream>
int main(){
    using namespace std;
    int m;
    cin>>m;

    for (int i=1;i<=m;i++){
        for (int j=1;j<=i;j++){
            cout<<"*";
        }
        cout<<endl;
    }
}
#include<iostream>
using namespace std;

int main() {
    int m;
    cin >> m;
    
    for(int i = 1; i <= m; i++) {
        // Loop for printing stars in each row
        for(int j = 1; j <= m-i+1; j++) {
            cout << "*";
        }
        cout << endl; // Move to the next line after each row
    }

    return 0;
}
*/


#include<iostream>
using namespace std;

int main() {
    int m;
    cin >> m;
    
    for(int i = 1; i <= m; i++) {
        // Loop for printing stars in each row
        for(int j = 1; j <= i; j++) {
            cout << "*";
        }
        cout << endl; // Move to the next line after each row
    }

    return 0;
}
