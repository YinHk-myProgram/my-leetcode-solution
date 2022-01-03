//using three string methods which provided by java.lang.String:
//java.lang.String.startsWith() &
//java.lang.String.substring() &
//java.lang.String.length()


class Solution {
    
    public String longestCommonPrefix(String[] strs) {
      int count = 0; 
      int end = 1;
      boolean isSubStr = true;
      String prefix = "";
      String s = strs[0];
      String subStr; 
        
      while(end<=s.length()) {
         subStr = s.substring(0, end); 
         for(int i=0;i<strs.length;i++) {
           if(!strs[i].startsWith(subStr)) {
             isSubStr = false; 
             break;  
           } 
         }
         if(isSubStr) {
           prefix = subStr;
           end++;
         }else {
           break;  
         }
       }
       return prefix;
    }
    
}
