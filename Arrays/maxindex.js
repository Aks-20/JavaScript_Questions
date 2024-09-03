function maxindex(arr){
    let index=0;
    for (let i=1;i<arr.length;i++){
        if(arr[i]>arr[index]){
         index=i;
        }
         
        
    }
    return index
}
let arr=[14,5,12]

console.log(maxindex(arr))