/**suggest  Backtracking logic method
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {

  var results = [];
  
 
  var recursive = (result) => {

    if (result.length === nums.length) {
      results.push(result.slice());
      return;
    }
    
    //backtracking
    for (var i = 0; i < nums.length; i++) {
      if (!result.includes(nums[i])) {
        result.push(nums[i]);
        recursive(result);
        result.pop();
      }
    }
    
  }

  recursive([]);
  return results;
  
};


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let matrix = []
    let list = [...nums]
    
    for(let i=0;i<=nums.length-1;i++) {
        let temp = [...list]
        temp.shift()
        for(let j=1;j<nums.length-1;j++) {
            
            let p1 = [...temp]
            p1.unshift(list[0])
            matrix.push(p1)
            let p2 = [...p1]
            p2.shift()
            p2.reverse()
            let p3 = [...p2]
            p3.unshift(list[0])
            matrix.push(p3)
            let p4 = [...p3]
            p4.shift()
            
            let shiftNum = p4.splice(0, 1)
            p4.push(shiftNum[0])
            temp = p4
        }
        let shiftNum = list.splice(0, 1)
        list.push(shiftNum) 
    }
    return matrix
};


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let matrix = []
    let index = 0
    let list = nums
    
    const swap = (index) => {
           
           for(let i=index;i<=nums.length-1;i++) {
                
                let temp
                temp = list[index]
                list[index] = list[i+1]
                list[i+1] = list[index] 
                matrix.push(list)
            }
           index++
           if(index<nums.length-1) { 
             swap(index)
           }
    }
    return matrix
};

/**
1234    2134    3214    4231

1[234]:  1234 1324 1432
````     12[34]:  1234  1243
         13[24]:  1324  1342
         14[32]:  1432  1423

2[134]:  2134 2314 2431
         21[34]:  2134  2143
         23[14]:  2314  2341
         24[31]:  2431  2413

3[214]:  3214 3124 3412
         32[14]:  3214  3241
         31[24]:  3124  3142
         34[12]:  3412  3421

4[231]:  4231 4321 4132
         42[31]:  4231  4213
         43[21]:  4321  4312
         41[32]:  4132  4123
**/

