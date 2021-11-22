/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let sum=0
    for(let i=0;i<=s.length-1;i++) {
        let symbol = s[i]
         
        switch (symbol) {
            case 'I':{
                (s[i+1]=='V'||s[i+1]=='X')? value=-1 : value=1
                break
            }   
            case 'V':
                value=5
                break
            case 'X':
                (s[i+1]=='L'||s[i+1]=='C')? value=-10 : value=10
                break
            case 'L':
                value=50
                break
            case 'C':
                (s[i+1]=='D'||s[i+1]=='M')? value=-100 : value=100
                break
            case 'D':
                value=500
                break
            case 'M':
                value=1000
                break        
        }
        sum += value  
    }
    return sum    
};
