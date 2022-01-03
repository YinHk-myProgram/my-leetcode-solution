/*
   O(n), linear search for each element, count++ if there exist nums[i]>0 
   and nums[i] do not repeat, check count = nums[i], if not, return count++ as the answer of first missing positive
   
*/

class Solution {
    
    public int firstMissingPositive(int[] nums) {
        int count = 0;
        Arrays.sort(nums);
      
      //check count
      if(nums.length!=1) {
        for(int i=0;i<nums.length;i++) {
            
            if(((nums[i]<=0) || ((i>0) && (nums[i]==nums[i-1]))) && (i!=nums.length-1)) continue;
             else {
                 
                if(nums[i]>0) {
                  count++;
                  if(nums[i]!=count) break;
                    else if( (nums[nums.length-1]==count) && (i==nums.length-1 && nums[i]!=nums[i-1]) ) count++;
                    
                }else if(nums[nums.length-1]<=0) count++;
             }
            
        }
      }else { //for the case only one element in nums
         if(nums[0]!=1) count++;
          else count = 2;
      }
      return count;
    }
    
}
