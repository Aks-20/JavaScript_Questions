#include<iostream>
#include<vector>
using namespace std;
int main(){
    vector<int> v;
    

    cout<<"Size:"<<v.size()<<endl;
    cout<<"Capacity "<<v.capacity()<<endl;
    v.push_back(1);
    cout<<"Size:"<<v.size()<<endl;
    cout<<"Capacity "<<v.capacity()<<endl;
      v.push_back(2);
    cout<<"Size:"<<v.size()<<endl;
    cout<<"Capacity "<<v.capacity()<<endl;
      v.push_back(3);
    cout<<"Size:"<<v.size()<<endl;
    cout<<"Capacity "<<v.capacity()<<endl;
      v.push_back(4);
    cout<<"Size:"<<v.size()<<endl;
    cout<<"Capacity "<<v.capacity()<<endl;

    v.resize(5);

    return 0;

}