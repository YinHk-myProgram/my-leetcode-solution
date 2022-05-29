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


/* other method */

// Java implementation of O(n^2)
// time and O(1) space method
// to find the longest palindromic substring
public class LongestPalinSubstring {

	// This function prints the
	// longest palindrome substring
	// (LPS) of str[]. It also
	// returns the length of the
	// longest palindrome
	static int longestPalSubstr(String str)
	{
		int n = str.length(); // calculcharAting size of string
		if (n < 2)
			return n; // if string is empty then size will be 0.
				// if n==1 then, answer will be 1(single
				// character will always palindrome)

		int maxLength = 1,start=0;
		int low, high;
		for (int i = 0; i < n; i++) {
			low = i - 1;
			high = i + 1;
			while ( high < n && str.charAt(high) == str.charAt(i)) //increment 'high'								
				high++;
	
			while ( low >= 0 && str.charAt(low) == str.charAt(i)) // decrement 'low'				
				low--;
	
			while (low >= 0 && high < n && str.charAt(low) == str.charAt(high) ){
				low--;
				high++;
		}

		int length = high - low - 1;
		if (maxLength < length){
			maxLength = length;
			start=low+1;
		}
	}
	System.out.print("Longest palindrome substring is: ");
	System.out.println(str.substring(start, start + maxLength ));
	return maxLength;
	
}

	// Driver program to test above function
	public static void main(String[] args)
	{

		String str = "forgeeksskeegfor";
		System.out.println("Length is: "
						+ longestPalSubstr(str));
	}
}
// This is code is contributed by saurabh yadav
