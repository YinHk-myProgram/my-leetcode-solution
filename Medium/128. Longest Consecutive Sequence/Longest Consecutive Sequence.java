/*
  sort the array first,
  then linear search for each item, compare to next item.
  
  count the each consecutive sequence, and assign longest sequence to max sequence, return this sequence after looping

*/

class Solution {
    int count =0, maxCount = 0, i = 0;
    
    public int longestConsecutive(int[] nums) {
       Arrays.sort(nums);
       
       if(nums.length>1) {
           
          while(i<nums.length-1) {
            if(nums[i]==nums[i+1]-1) {
               count++;                                            //System.out.println("count:" + count);
               if(count>maxCount-1) maxCount = count+1;            //System.out.println("maxCount:" + maxCount);
            }else if(nums[i]<nums[i+1]-1) count = 0;
              else if(nums[i]==nums[i+1] && count == 0) {
                 count =1;
                 if(count>maxCount-1) maxCount = count;
                 count = 0;
              }
            i++;
          }
           
       }else if(nums.length==1) return 1;
        else return 0;
        
       return maxCount;
    }
    
}
