class Solution {
    
    public static boolean palindrome(String s) {
        if (s.length() <= 1)
            return true;
        else
            return (s.charAt(0) == s.charAt(s.length()-1)) &&
                palindrome(s.substring(1,s.length()-1));
    }
    
    public String longestPalindrome(String s) {
       int index;
       int longestLength = 0;
       String longestStr=s.substring(0, 1);
        
       if(s.length()==1) {
          return s; 
       } else {
           for(int i=0; i<s.length(); i++) {
            for(int j=s.length()-1; j>=i+1; j--) {
                String subStr = s.substring(i, j+1);
                if(palindrome(subStr)) {
                    if(subStr.length()>longestLength) {
                        longestLength = subStr.length();
                        longestStr = subStr;
                    }    
                }
              
            }
           }
           return longestStr;
       }
       
    }
    
}
