/*
   Convert array to array list
   merge and then sort them
   find the median
 */

class Solution {
    
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        
        List<Integer> list = new ArrayList<Integer>();
        List<Integer> alist1 = Arrays.stream(nums1).boxed().collect(Collectors.toList());
        List<Integer> alist2 = Arrays.stream(nums2).boxed().collect(Collectors.toList());
        list.addAll(alist1);
        list.addAll(alist2);
        Collections.sort(list);
        
        int index;
        
        if(list.size()%2==0) {
            index =  list.size()/2;
            double median = ((double) list.get(index-1) + (double) list.get(index))/2;
            return median;
        }else {
            index = (list.size()+1)/2;
            double median = (double) list.get(index-1);
            return median;
        }
        
        
        
    }
    
}

