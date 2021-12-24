
class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        //merge
        for(int i=m;i<m+n;i++) {
          nums1[i] = nums2[i-m];    
        }
        //sorting
        for(int i=1;i<nums1.length;i++){
            for(int j=i;j>=1;j--){
                if(nums1[j]<nums1[j-1]){
                    int temp = nums1[j-1];
                    nums1[j-1] = nums1[j];
                    nums1[j] = temp;
                } 
            }
        }
    }
}
