 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    let list = [];
    //recurrsion method
    const postorder = node => {
        if(node) {
            postorder(node.left);
            postorder(node.right);
            list.push(node.val);
        }
    }
    if(root)  postorder(root);
    return list;
};

