/**
 * @param {number} numRows
 * @return {number[][]}
 */
 
// loop for each element and add the pairs in the new array
 
var generate = function(numRows) {
    let res = [[1]];
    let count = 1;
    
    while(count < numRows) {
      const temp = res[res.length-1];   
      let arr = [1];
        
      for(let i=0; i<temp.length-1; i++)
         arr.push(temp[i] + temp[i+1]);
        
      arr.push(1);
      res.push(arr);
      count++;
    }
    return res;
    
};

