/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    
    let count = 0;
    let check = [];
    for(let i=0;i<=s.length-1;i++){
        if(s[i]=='('){
            check.push(s[i]);
        }else if(s[i]==')'){
            if(check.length!=0){
              check.pop(); 
            }else count++;    
        }
    }
    return count + check.length;
    
};
