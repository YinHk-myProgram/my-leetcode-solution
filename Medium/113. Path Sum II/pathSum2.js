/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    let res = [];
     
    const checkSum = (list, node, sum) => {
        
       if(!node) return;
        
       list.push(node.val);
       if(node.val===sum && !node.left && !node.right) res.push(list);
       
       checkSum([...list], node.left, sum-node.val);  checkSum([...list], node.right, sum-node.val);
    }
    checkSum([], root, targetSum)
    
    return res;
};
