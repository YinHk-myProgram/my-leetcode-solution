class Solution {
    public boolean containsDuplicate(int[] nums) {
        Set<Integer> set = new HashSet<Integer>();
        
        for(int i:nums) {
           boolean isDuplicated = set.add(i);
           if(!isDuplicated)
               return true;
            
        }
        return false;
        
    }
}

