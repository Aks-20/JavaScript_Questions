function gcd(a,b){
    if (a==0){
        return b;

    }
    if (b==0){
        return a;
    }
    if(a==b){
        return a;
    }

    //Euclidian Algorithm
    if (a>b){
        return gcd(a-b,b)
    }
    else{
        return gcd(a,b-a)
    }


}

function lcm(a,b){
    return (a*b)/gcd(a,b)
}
//console.log(gcd(70,80    ))
console.log(lcm(2,6));
