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
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if(root) return pathSum(root, targetSum);
     else return false;
};

const pathSum = (root, sum) => { 
   if(!root) return false;
   if(!root.left && !root.right) return root.val === sum;
    else return pathSum(root.left, sum-root.val) ||  pathSum(root.right, sum-root.val);
}
