// Using backtracking and checking remainder

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res = [];
    candidates.sort((a, b) => a-b);
    
    const backtracking = (start, tempArr, remainder) => {
        for(let i=start; i<candidates.length&&candidates[i]<=remainder; i++) {
            
            if(candidates[i] === remainder) 
                res.push([...tempArr, candidates[i]]);
             else {
               temp = [...tempArr, candidates[i]];
               remain = remainder - candidates[i];
               backtracking(i, temp, remain);
             }
        }
    }
    backtracking(0, [], target);
    return res;
};

