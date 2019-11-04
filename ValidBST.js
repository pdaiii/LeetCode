/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    // Check that the left and right child nodes are less than the current node's value
    return helper(root, -Infinity, Infinity);
};

function helper(root, lower, upper) {
    let curr = root;
    // If leaf node, return true
    if(!curr) return true;
    // If the node value is not within the bounds, return false
    if(curr.val <= lower || curr.val >= upper) return false;
    // Recursively access the left node, and give it the lower and upper bounds
    if(!helper(root.left, lower, root.val)) return false;
    if(!helper(root.right, root.val, upper)) return false;
    // If the left and right subtrees and less and greater than the node's key respectively, then return true
    return true;
}
