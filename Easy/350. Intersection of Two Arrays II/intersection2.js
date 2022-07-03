/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
   let res = [];
    
   nums1.forEach((item) => {
       if(nums2.includes(item)) {
         res.push(item);
         nums2.splice(nums2.indexOf(item), 1);
       } 
    });
    
    return res;
};


