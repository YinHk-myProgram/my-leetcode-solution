/**
 * @param {number} n
 * @return {string[]}
 */

// using recurrsion to solve the problems

var generateParenthesis = function(n) {
    
    let stack = [];
    recurrsion(0, 0, '', stack, n);
    return stack;
};

function recurrsion(openCount, closeCount, str, stack, n) {
    
    // If open parenthese + close parenthese = 2n, then finish
    if(openCount === n && closeCount === n) {
        stack.push(str);
        return;
    }
    
    // add open parenthese if open parenthese < n
    if(openCount < n)
       recurrsion(openCount+1,  closeCount, str+'(', stack, n);
    
    // add close parenthese if close parenthese < open parenthese
    if(closeCount < openCount) 
       recurrsion(openCount,  closeCount+1, str+')', stack, n);
    
}
