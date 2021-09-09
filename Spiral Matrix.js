/**
 * @authors yinHk (ministudiowingyin@gmail.com)
 * @date    2021-09-08 
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const row = matrix.length
    const col = matrix[0].length
    let m = row
    let n = col
    let number = []
    let sumRow = 0
    let sumCol = 0 
   
   
    while(m>=1 && n>=1) {
        let count = 0
        
        if(col!=1) {
           if(n>=1) {
             for(let i=0;i<=n-1;i++) {
                 number.push(matrix[sumRow][sumCol+i])
             }
             m--
             count++
           }
           if(count==1 && m>=1) {
             for(let i=0;i<=m-1;i++) {
                 number.push(matrix[sumRow+i+1][col-sumCol-1])
             }
             n--
             count++
            }
            if(count==2 && n>=1) {
             for(let i=(col-sumCol-2);i>=sumCol;i--) {
                 number.push(matrix[row-sumRow-1][i])
             } 
             m--
             count++
            }
            if(count==3 && m>=1) { 
              for(let i=(row-sumRow-2);i>=(sumRow+1);i--) {
                number.push(matrix[i][sumCol])
              }
              n--
            }
          }else {
             for(let i=0;i<=row-1;i++) {
                 number.push(matrix[i][0])
                 m--
             }
             
          }
          sumRow++
          sumCol++
    }
    return number
};
