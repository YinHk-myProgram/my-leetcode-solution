/**
 * @param {string} s
 * @return {number}
 * linear search, find the wrap level and used it to count the score.
 */
var scoreOfParentheses = function(s) {
    
    let level = 1;
    let count = 0;
    for(let i=1;i<=s.length-1;i++){
      if(s[i-1]=='('&&s[i]=='('){
        level++; 
      }else if(s[i-1]==')'&&s[i]==')'){
        level--
      }else if(s[i-1]=='('&&s[i]==')'){
        count = count + Math.pow(2, (level-1)); 
      }
    }
    return number = count;
    
};

/*
()=1
1x1=2^0=2^(1-1)
(())=2
1x2=2^1=2^(2-1)
((())) = 4
1x2x2=2^2=2^(3-1)
(((()))) = 8
1x2x2x2=2^3=2^(4-1)
((((())))) = 16
1x2x2x2x2=2^4=2^(5-1)
*/
