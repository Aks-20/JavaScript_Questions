#include<iostream>
#include<cmath>
using namespace std;

int add(int x,int y){
    int sum= x+y;
    return sum;
   

}
int main(){

 cout<<add(2,4)<<endl;
 cout<<pow(4,2)<<endl;
 cout<<sqrt(16)<<endl;
 cout<<log(256)/log(2)<<endl;
 cout<<sin(30*M_PI/180)<<endl;
 cout<<cos(60*M_PI/180)<<endl;
 cout<<tan(45*M_PI/180)<<endl;
return 0;
}