function transpose(mat) {
    for (let i = 0; i < mat.length; i++) {
        for (let j = i + 1; j < mat[0].length; j++) {
            // Swap elements mat[i][j] and mat[j][i]
            let temp = mat[i][j];
            mat[i][j] = mat[j][i];
            mat[j][i] = temp;
        }
    }
}

let mat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

transpose(mat);
console.log(mat);
