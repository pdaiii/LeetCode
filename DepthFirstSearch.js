class TreeNode() {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

//      1
//    2   3
//   4 5 6 7

// Stack: 3, 2, 5, 4, 7, 6
function depthFirstSearch(root, targetValue) {
  if(!root) return null;
  let stack = [root];
  while(stack.length) {
    let node = stack.pop();
    if(node.val === targetValue) { return node; }
    if(node.right) { stack.push(node.right) }
    if(node.left) { stack.push(node.left) };
  }
  return null;
}
