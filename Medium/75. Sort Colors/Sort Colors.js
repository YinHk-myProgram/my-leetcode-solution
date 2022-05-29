/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * basic sorting algorithm for array only
 */
var sortColors = function(nums) {
    
    for(let i=1;i<=nums.length-1;i++){
      for(let j=i;j>=1;j--){
        if(nums[j]<nums[j-1]){
           let temp = nums[j-1];
           nums[j-1] = nums[j];
           nums[j] = temp;
         } 
       }
    }
    
};
