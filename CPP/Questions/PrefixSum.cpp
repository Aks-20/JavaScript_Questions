#include<iostream>
#include<vector>
using namespace std;


void runningSum(vector<int>& v){
for(int i=0; i<v.size();i++){
    v[i]=v[i-1]+v[i];
    
}
}int main(){
    int m;
    cin>>m;
    vector<int> v;
    for(int i=0;i<m;i++){
        int element;
        cin>>element;
        v.push_back(element);
    }
    runningSum(v);
    for(int i=0;i<m;i++){
        cout<<v[i]<<"";
    }
    cout<<endl;
    }