function SelectionSort(arr){
    for(i=0;i<arr.length;i++){
        let si=i;
        for (j=0;j<arr.length;j++){
            if(arr[si]>arr[j]){
                si=j
            }
        }
//Swaps
        [arr[si],arr[i]]=[arr[i],arr[si]]
    }

}

//Time Complexity O(n^2)
//Space Complexity O(1)
//Swap ->n
