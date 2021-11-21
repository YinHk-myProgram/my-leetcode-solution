/**
 * @param {string} s
 * @return {boolean}
 * by considering symmetry of the pattern, push'(','{','[' into
 * new array, when search for the string, pop when ')','}',']' in the string
 */
var isValid = function(s) {
    let arr = [];
    for(let i=0;i<=s.length-1;i++){
      if(s[i]=='('){
        arr.push('(');
      }else if(s[i]=='{'){
        arr.push('{'); 
      }else if(s[i]=='['){
        arr.push('[');     
      }else if(s[i]==')'){
        let x = arr.pop();
        if(x!='('){
          return false;
          break;
        }     
      }else if(s[i]=='}'){
        let x = arr.pop();
        if(x!='{'){
          return false;
          break;
        }     
      }else if(s[i]==']'){
        let x = arr.pop();
        if(x!='['){
          return false;
          break;
        }     
      }
    }
    if(arr.length==0)
      return true
    else return false
};
