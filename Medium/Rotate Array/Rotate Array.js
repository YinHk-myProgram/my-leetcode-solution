/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 * This solution use reverse array algorithms concept
 */

const reverseNum = (arr,start,end) => {
  if(start<end){
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    reverseNum(arr,start+1,end-1);
  }
}

var rotate = function(nums, k) {
    let step;
    let remainder = k % nums.length;
    if(k<=nums.length) {
       step = k;
    }else step = remainder;
        
    nums.reverse();
    reverseNum(nums,0,step-1);
    reverseNum(nums,step,nums.length-1); 
};
