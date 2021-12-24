/**
 * @param {number} n
 * @return {number}
 */

//use combination
//Maths approach
//Solving by considering the following two conditions:
// 1. i+2j = n   where i and j are total number of 1 and 2 respectively.
// 2.  two combinations:
//     ((n+i)/2)C(i)  for odd number n
//     (n-j)C(j)      for even number n


function factorial(num){
    if(num == 0 || num == 1){
        return 1;
    }else{
        return num * factorial(num-1);
    }
}

var climbStairs = function(n) {
    let p,sum=0;
    
    if(n%2==0) {
         //n is even
         let k=0;
          
         while((n-2*k)>=0) { 
           p =  ( factorial(n-k) )/( factorial(k) * factorial(n-2*k) );
           sum = sum + p; 
           k++;
         }
         return sum;
           
      }else {
          //n is odd
          let k=1;
          while((n+k)/2 <= n) { 
            if((n+k)%2==0) {
              p = ( factorial((n+k)/2) )/( factorial(k) * factorial((n+k)/2-k) );
              sum = sum + p;
            }
            k++;
          }
          return sum;
      }
    
};
