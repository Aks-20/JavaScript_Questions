#include<iostream>
using namespace std;
int main(){
int array[]={3,9,18,10,11};
int key=11;
int ans=-1 ;
for(int i=0;i<5;i++ ){
    if(array[i]==key){
        
        ans=i;
       
    }
}

    cout<<ans<<endl;
}