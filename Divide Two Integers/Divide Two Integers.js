/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
   let count = 0;
   let multiple = 0;
    
   for(let i=1;i<=Math.abs(dividend);i=i+Math.abs(divisor)){
      if(Math.abs(divisor)==1){
        multiple = Math.abs(dividend);
        break;
      }
    
      if(count<=( Math.abs(dividend)-Math.abs(divisor) )){ 
        multiple++;
      }else break;
      count = count + Math.abs(divisor);
   }
    
   if((dividend<0&&divisor>0)||(dividend>0&&divisor<0)) 
       return -multiple;
     else if(dividend<0&&divisor<0){
         if(multiple>=2147483648) return multiple-1
          else return multiple;
     }else return multiple;  
    
};
