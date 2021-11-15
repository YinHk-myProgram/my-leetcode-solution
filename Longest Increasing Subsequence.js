/**
 * @param {number[]} nums
 * @return {number}
 * reference: 
 */
var lengthOfLIS = function(nums) {
    
  let positionArray = [1]
  let maxIndex = 1
  let currentIndex

  for(let i=1;i<=nums.length-1;i++) { 
    if(nums[i]>nums[positionArray.lastIndexOf(maxIndex)]){
        maxIndex ++
        positionArray.push(maxIndex)
    }else {
        if(maxIndex>1) {
          for(let j=maxIndex;j>=1;j--) {
            if(nums[i]<=nums[positionArray.lastIndexOf(j)]){
              currentIndex = j
            }
          }
          positionArray.push(currentIndex)
        }else positionArray.push(maxIndex)
    }
  }
  return Math.max(...positionArray) 
};
