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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let list = [];
    //recurrsion method
    const inorder = node => {
        if(node) {
            inorder(node.left);
            list.push(node.val);
            inorder(node.right);
        }
    }
    if(root)  inorder(root);
    return list;
};

