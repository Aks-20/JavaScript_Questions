/*#include <iostream>
using namespace std;
int main(){
   for (int j=1;j<=3;j++){
for (int i= 1;i<=6;i++){
        

        cout<<"*";

   } 
cout<<endl;
        
    }
}*/


/*#include<iostream>
using namespace std;
int main(){
    int m,n;
    cin>>m;
    cin>>n;
    for(int i=1;i<=m;i++){
        for (int j = 1; j <=n; j++)
        {
            cout<<'*';
        }
        cout<<endl;
    }

}*/


#include<iostream>
using namespace std;
int main(){
    int row,col;
    cin>>row;
    cin>>col;


    for(int i=1;i<=row;i++){
        for (int j = 1; j <=col; j++)
        {
           if(i==1||j==1||i==row||j==col){
        cout<<"*";
    }
    else
    cout<<" ";
        }

        cout<<endl;
    }

   
}

