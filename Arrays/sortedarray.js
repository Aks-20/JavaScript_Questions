function sorting(arr){
    let index=0
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]=arr[i+1]){
            return false
        }
    }
    return true
}
let arr=[14,5,12]

console.log(sorting(arr))