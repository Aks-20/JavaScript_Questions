//trailing zero in facttorial
function findtrailingzero(n){

    if(n<0){
        return -1

    }
    let count=0;
    for (let i=5;Math.floor(n/i)>=1;i*=5){
count+=Math.floor(n/i)
    }
    return count
}

console.log(findtrailingzero(4))
console.log(findtrailingzero(8))
console.log(findtrailingzero(25))
console.log(findtrailingzero(100))