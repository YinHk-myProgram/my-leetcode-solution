/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
   let depulicated = []
   
   for(let i=0;i<=nums.length-1;i++) { 
     for(let j=i+1;j<=nums.length-1;j++) {
         if(nums[i]==nums[j]) {
             depulicated.push(nums[i])
         }
     }
   }
   let difference = nums.filter(item => depulicated.indexOf(item) === -1)
   return difference[0]
};
