/*#include<iostream>
using namespace std;
int main (){
    int a;
     int b;
    int output;
    cin>>a;
    cout<<a<<endl;
     cin >> b;
    cout<<b<<endl;
   



    output=a*b;
    cout<<output<<endl;
    return 0;


}

#include <iostream>
using namespace std;
int main (){
    char ch='U';
    int asciivalue=ch;
cout << "ASCII value of " << ch << " is: " << asciivalue << endl;
   
    
    return 0;
}


#include<iostream>
using namespace std;
int main(){
    int a;
    cout<<"Enter the value of a";
    cin>>a;
    cout<<"Value of a "<<a<<endl;
    int output=a*a*a;
    cout<<output<<endl;
    return 0;
}*/

#include <iostream>
using namespace std;

int main() {
    cout << "Size of fundamental data types:\n";
    cout << "The sizeof(char) : " << sizeof(char) << " bytes" << endl;
    cout << "The sizeof(short) : " << sizeof(short) << " bytes" << endl;
    cout << "The sizeof(int) : " << sizeof(int) << " bytes" << endl;
    cout << "The sizeof(long) : " << sizeof(long) << " bytes" << endl;
    cout << "The sizeof(long long) : " << sizeof(long long) << " bytes" << endl;
    cout << "The sizeof(float) : " << sizeof(float) << " bytes" << endl;
    cout << "The sizeof(double) : " << sizeof(double) << " bytes" << endl;
    cout << "The sizeof(long double) : " << sizeof(long double) << " bytes" << endl;
    cout << "The sizeof(bool) : " << sizeof(bool) << " bytes" << endl;

    return 0;
}
