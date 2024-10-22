#include<iostream>
using namespace std;
int main(){
    int array[]={1,2,3,4,5};
    int target=7;
    int size=5;
    int triplets=0;

    for(int i=0;i<size;i++){
        for (int j=i+1;j<size;j++){
            for(int k=j+1;k<size;k++){
                if(array[i]+array[j]+array[k]==target){
                    cout<<array[i]<<" "<<array[j]<<" "<<array[k]<<endl;
                    triplets++;
                }
            }
        }
    }
    cout<<"Total number of triplets: "<<triplets<<endl;
    return 0;
}