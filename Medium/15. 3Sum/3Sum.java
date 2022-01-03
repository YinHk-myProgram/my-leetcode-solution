class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        
        List<List<Integer>> sum = new ArrayList<List<Integer>>();
        int front,rear;
        Arrays.sort(nums);
        
        for(int i=0;i<nums.length-2;i++) {
            front = i+1;
            rear = nums.length-1;
            if(i>0 && nums[i]==nums[i-1]) {
              continue; 
            }
            
            while(front<rear) {
                
              List<Integer> temp = new ArrayList();  
              int num = nums[i]+nums[front]+nums[rear];
              
              if(num==0) {
                 temp.add(nums[i]);
                 temp.add(nums[front]);
                 temp.add(nums[rear]);
                 if(!sum.contains(temp)) {
                     sum.add(temp);
                 } 
                 front++;
              }else if(num<0) front++;
                else  rear--;
            }
        }
        return sum;
    }
}
