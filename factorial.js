function factorial(x){
    if(x==0||x==1){
        return 1
    } 
    else{
      x=Math.abs(x)
        return x*factorial(x-1)
    }

}
console.log("factorial:",factorial(-1))