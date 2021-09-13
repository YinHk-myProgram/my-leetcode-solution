/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let n = matrix.length
    for(let i=n-1;i>=0;i--) {
        for(let j=n-1;j>=0;j--) {
            let num = matrix[j].shift()
            matrix[n-1-i].push(num)
        }       
    }
    
};
