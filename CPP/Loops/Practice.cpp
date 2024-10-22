/*#include<iostream>
using namespace std;
int main(){
    int n;
    cin>>n;
    int sum=0;
    int i=1;
    while(i<=n){
        sum+=i;
        i++;

    }
    cout<<sum<<endl;
    return 0;
}*/
#include<iostream>
using namespace std;
int main(){
    int i=5;
    while(true){
        if (i%27==0){
            cout<<i<<endl;
            break;
        }
        i+=5;
    }
}