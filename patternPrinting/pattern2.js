function patterns(n){
    for(let i=1;i<n;i++){
        let str=""
        for(let j=1;j<i+1;j++){
            str+="*"
        }
        console.log(str)
    }
}
console.log(patterns(5))
console.log(patterns(5))