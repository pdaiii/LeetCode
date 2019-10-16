var hasPathSum = function(root, sum) {
    // Recursive solution
    if(!root) return false;
    if(!root.left && !root.right && root.val === sum) return true;
    return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
};
