/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// modify the binary search when the mid point = target is found 

const first = (arr, target) => {
   let left = 0;
   let right = arr.length-1;
   let firstIndex = -1;
   
   while(left <= right) {
     let mid = Math.floor((left + right)/2);
     if(arr[mid]==target) {
       firstIndex = mid;
       right = mid - 1;
     } else if(arr[mid]>target) {
        right = mid - 1;       
     } else {
        left = mid + 1;
     }     
   }  
   return firstIndex;
}

const last = (arr, target) => {
   let left = 0;
   let right = arr.length-1;
   let lastIndex = -1;
   
   while(left <= right) {
     let mid = Math.floor((left + right)/2);
     if(arr[mid]==target) {
       lastIndex = mid;
       left = mid + 1;
     } else if(arr[mid]>target) {
        right = mid - 1;       
     } else {
        left = mid + 1;
     }     
   }  
   return lastIndex; 
}

var searchRange = function(nums, target) { 
   return [first(nums, target), last(nums, target)]; 
};


