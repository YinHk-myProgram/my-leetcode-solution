// exp: [3,2,3,0,0,1,1,2]
// using O(n) linear search, from back to front
// set target position from the back, if exists index + nums[index] >= target position,
// change target position to forward index position which fullfil above condition
// finally see whether target position reach to the start position

class Solution {
    //Greedy 
    public boolean canJump(int[] nums) {
        int pos = nums.length-1;
            
        for(int i=nums.length-1; i>=0; i--) {
          if(nums[i] + i >= pos)
             pos = i;
        }
        if(pos==0)
          return true;
        else return false;
    }
}
