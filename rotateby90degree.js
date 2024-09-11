// for 90 degree I have first transpose
//reverse each row
function rotate90(mat){
//Transpose
//Reverse

for (let i = 0; i < mat.length; i++) {
    for (let j = i + 1; j < mat[0].length; j++) {
        // Swap elements mat[i][j] and mat[j][i]
        let temp = mat[i][j];
        mat[i][j] = mat[j][i];
        mat[j][i] = temp;
    }
}

for(let i=0;i<mat.length;i++){
    reverseArray(mat[i])
}
}
function reverseArray(arr){
    let left=0; right=arr.length-1
    while(left<right){
        [arr[left],arr[right]]=[arr[right],arr[left]]
        left++;
        right--;
    }

}
let mat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

rotate90(mat);
console.log(mat);
