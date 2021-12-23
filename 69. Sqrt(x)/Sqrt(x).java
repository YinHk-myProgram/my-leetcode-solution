//using binary search
//0^2, 1^2, 2^2, 3^2,.....,46340^2, 46341^2
//binary search, test which interval above does x belongs to.
//eg: x=8, 8 is belongs to 2^2 and 3^2, so sqare root after truncated is 2


//Runtime: 1 ms, faster than 99.98% of Java online submissions for Sqrt(x).
//Memory Usage: 36.1 MB, less than 53.01% of Java online submissions for Sqrt(x).


class Solution {
   
    public int search(int num, int start, int maxRoot) {
         
      if(start < maxRoot){
        
        int mid;
        if((maxRoot-start)%2==0) {
           mid =  start + (maxRoot-start)/2;
        }else mid = start + (maxRoot-start+1)/2; 
          
        
        if(mid*mid==num) {
           return mid; 
        }else if(mid*mid > num) {
            
           if((mid-1)*(mid-1) <= num) {
              return mid-1; 
           }else {
              return search(num, start, mid-1);
           } 
            
        }else { 
           long square =  ((long)(mid+1))*((long)(mid+1)); 
           if(square > num) { 
              return mid; 
           }else if(square == num) {
              return mid+1; 
           }else {
              return search(num, mid+1, maxRoot);
           } 
            
        }
          
      }return 0;
         
    }
    
    public int mySqrt(int x) {
      return search(x, 0, 46341);
    }
    
}
