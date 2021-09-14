/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    for(let i=0;i<=nums.length-1;i++) {
        if(target<=nums[i]) {
            nums.splice(i,0,target)
            return nums.indexOf(target)
            break
        }else if(target>nums[nums.length-1])
            return  nums.length 
         else if(target==nums[nums.length-1])
            return nums.length-1
    }
    
};
