/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let num = Math.abs(x) 
    let originNum = x
    let count = 0
    let reverseNum = 0
    while(num/10 >= 1) {
        num = num/10
        count++
    }
    for(let i=count;i>=0;i--) {
        reverseNum += (x % 10)*Math.pow(10,i)
        x = Math.trunc(x/10)
    }
    if(reverseNum==originNum && originNum>=0) {
        return true
    }else return false        
    
};
