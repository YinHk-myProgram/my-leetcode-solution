/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
   let res = [];
   candidates.sort((a, b) => a-b);
   
   const backtracking = (start, tempArr, sum) => {
     if(sum === target) res.push([...tempArr]);
     if(sum<=target) {
         for(let i=start; i<candidates.length; i++) {
            if(i>start && candidates[i] === candidates[i - 1]) continue; 
             backtracking(i+1, [...tempArr, candidates[i]],  sum + candidates[i]);
         }
     }  
   }
   backtracking(0, [], 0);
   return res;
};
