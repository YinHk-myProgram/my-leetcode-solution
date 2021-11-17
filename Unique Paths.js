/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * use maths to solve this problem: cobination (m+n-2)C(m-1) or (m+n-2)C(n-1)
 */

const factorial = n => {
    let num = 1;
    if(n==0||n==1) return num;
    else {
      for(let i=n;i>=1;i--){
        num = num*i;  
      }
      return num;
    }
}

var uniquePaths = function(m, n) {
    let number = factorial(m+n-2)/(factorial(m-1)*factorial(n-1));
    return number
};
