function isPalindrome(num){
let temp=num
let rev=0
while(temp!=0){
    n=temp%10
    temp=parseInt(temp/10)
    rev=rev*10+n
}
return num==rev;
}

console.log("Palindrome",isPalindrome(450))
console.log("Palindrome",isPalindrome(1223))
