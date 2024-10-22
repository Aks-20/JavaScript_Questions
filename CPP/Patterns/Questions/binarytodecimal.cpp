#include<iostream>
using 
namespace std;
int main(){
int n;
cin >> n;
int ans = 0;
int p = 1;
while (n > 0) {
int untis_digit = n % 10;
ans += p * untis_digit;
n /= 10;
p *= 2;
}
cout << ans << endl;
}


