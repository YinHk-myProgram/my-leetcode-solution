import java.util.*;

class Solution {
    
    ArrayList<Integer> arr = new ArrayList<Integer>();
    public boolean linearSearch(int[] a, int val) {
      for(int element:a) {
        if (element == val) {
            return true;
        }  
      } 
      return false;
    }
    
    public int[] intersection(int[] nums1, int[] nums2) {
       for(int i:nums1) { 
          if(linearSearch(nums2,i)){
            if(!arr.contains(i)){
                arr.add(i); 
            }
          } 
       }
       int[] intersection = new int[arr.size()];
       for(int i=0;i<intersection.length;i++){ 
          intersection[i] = arr.get(i).intValue();  //convert arrlist to primitive int array
       }
       return intersection;
    }
    
}
