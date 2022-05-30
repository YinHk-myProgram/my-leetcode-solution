/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
   
    let carry = 0;
    
    if( digits[digits.length-1]==9) {
        
      digits[digits.length-1] = 0;
      carry = 1; 
      if(digits.length==1) {
        digits.unshift(1);
      }else {
        for(let i=digits.length-2; i>=0; i--) {
           if(digits[i]!=9) {
             if(i!=0) {
               digits[i]++;
               break;
             }else {
               digits[i]++;  
             }
           }else if(digits[i]==9) {
              if(i==0) {
                 digits[i] = 0;
                 digits.unshift(1);
              } else digits[i] = 0;  
           }
        }
      }
    } else {
       digits[digits.length-1]++;
       
    }
    
    return digits;
    
};
