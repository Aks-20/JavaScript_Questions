function isprime(n){
    if(n==0||n==1){
        return false;
    }
    if(n===2){
        return true;
    }
    for(i=2;i<n;i++){
        if(n%i==0){
            return false;
        }
        return true;
    }

}
console.log(isprime(13))