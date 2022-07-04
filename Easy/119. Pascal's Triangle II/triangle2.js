/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let res = [[1]];
    let count = 1;
    
    while(count <= rowIndex) {
      const temp = res[res.length-1];   
      let arr = [1];
        
      for(let i=0; i<temp.length-1; i++)
         arr.push(temp[i] + temp[i+1]);
        
      arr.push(1);
      res.push(arr);
      count++;
    }
   
    return res[rowIndex];
};
