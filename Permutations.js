/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let matrix = []
    let list = [...nums]
    
    for(let i=0;i<=nums.length-1;i++) {
        let temp = [...list]
        temp.shift()
        for(let j=1;j<nums.length-1;j++) {
            
            let p1 = [...temp]
            p1.unshift(list[0])
            matrix.push(p1)
            let p2 = [...p1]
            p2.shift()
            p2.reverse()
            let p3 = [...p2]
            p3.unshift(list[0])
            matrix.push(p3)
            let p4 = [...p3]
            p4.shift()
            
            let shiftNum = p4.splice(0, 1)
            p4.push(shiftNum[0])
            temp = p4
        }
        let shiftNum = list.splice(0, 1)
        list.push(shiftNum) 
    }
    return matrix
};
