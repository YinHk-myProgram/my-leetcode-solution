/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0]
    for(let i=0;i<=nums.length-1;i++) {
        let sum = 0
        for(let j=i;j<=nums.length-1;j++) {
          sum += nums[j]
           if(sum>max) 
             max=sum  
        }     
    }
    return max
};
