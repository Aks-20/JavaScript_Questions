
var removeDuplicates = function(nums) {
    if (nums.length === 0) {
        return [];}

    let left = 0;
   

    for (let right = 1; right < nums.length; right++) {
        if (nums[left] !== nums[right]) {
            left++
            nums[left] = nums[right]
        }
    }
    
    return left+1;
};

let nums = [1, 1, 2];
let result = removeDuplicates(nums); 
console.log(result); // Output: 2
   // Output: [1, 2, ...] (array modified in place)
