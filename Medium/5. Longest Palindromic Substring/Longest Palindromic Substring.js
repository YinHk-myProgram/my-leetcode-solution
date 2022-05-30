/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    
    let longestSubstr = "";
    let logestLen = 0;
    let left,right;
    
    for(let i=0; i<s.length; i++) {
        
        /* calculating both case: odd and even length of substring in ths string while looping */
          
        left = i, right = i+1;
        // count for even length of substring
        while(left>=0 && right<s.length && s[left]==s[right]) {
          longestSubstr = (right - left + 1) > logestLen? s.slice(left, right+1):longestSubstr;
          logestLen = (right - left + 1) > logestLen? (right - left + 1):logestLen;
          left--;
          right++;
        }
          
          
          
     
        left = i, right = i;
        // count for odd length of substring
        while(left>=0 && right<s.length && s[left]==s[right]) {
          longestSubstr = (right - left + 1) > logestLen? s.slice(left, right+1):longestSubstr;
          logestLen = (right - left + 1) > logestLen? (right - left + 1):logestLen;
          left--;
          right++;    
        }
        
        
    }
    return longestSubstr;
     
};
