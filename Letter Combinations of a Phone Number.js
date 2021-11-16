/**
 * @param {string} digits
 * @return {string[]}
 * use flatMap(), logic: array1.flatMap(x=>array2.flatMap(y=>array3.flatMap(z=>x+y+z)))
 */
var letterCombinations = function(digits) {
   
  const phoneNums = { 2:'abc', 3:'def',4:'ghi',5:'jkl',6:'mno',7:'pqrs',8:'tuv',9:'wxyz'}
  let arr = []

  for(let i=0;i<=digits.length-1;i++) {
     const temp = Array.from(phoneNums[digits[i]])
     arr.push(temp)
  } 

  let list = arr.length!=0 ? arr[0].flatMap( e1=>{
        if(arr[1]!=undefined){ 
            return arr[1].flatMap( e2=> {
                if(arr[2]!=undefined){
                    return arr[2].flatMap( e3=> {
                        if(arr[3]!=undefined){
                            return arr[3].flatMap( e4=> e1+e2+e3+e4 )
                        }else return (e1+e2+e3)
                    })
                }else return (e1+e2)
            })
        }else return e1
  }):arr
  return list 
};
