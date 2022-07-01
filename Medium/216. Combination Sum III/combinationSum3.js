/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
   const nums = [1,2,3,4,5,6,7,8,9];
   let res = [];
   
   const backtracking = (start, tempArr, sum) => {
      if(tempArr.length > k) return;
      if(tempArr.length === k) {
         if(sum === n) {
             res.push([...tempArr]);
             return;
         }
         return;
      }
       
      for(let i=start; i<nums.length; i++) { 
         tempArr.push(nums[i]);
         backtracking(i+1, tempArr, sum + nums[i]);
         tempArr.pop();
      }  
   }
   
   for(let i=0; i<nums.length; i++) {
       backtracking(i+1, [nums[i]], nums[i]);
   }
   return res;  
};
