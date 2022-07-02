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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let res = [];
    let level = 0;   //starting level begin from 0
    
    const traversal = (node, level) => {
       if(node) {
         if(level === res.length)  res.push([]);
         res[level].push(node.val);
         traversal(node.left, level+1);
         traversal(node.right, level+1); 
       }  
    } 
    if(root) traversal(root, 0);
    return res;
};


