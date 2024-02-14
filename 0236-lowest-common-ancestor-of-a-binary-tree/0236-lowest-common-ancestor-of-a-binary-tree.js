/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    
    // leaf node edge case needed
    if (!root) return null
    
    // if either p or q are not null, then this is the LCA
    if (root === p || root === q) return root
        
    let leftSt
    let rightSt
    
    leftSt = lowestCommonAncestor(root.left, p , q)
    rightSt = lowestCommonAncestor(root.right, p , q)
        
    if (leftSt && rightSt) {
        return root
    }
    else return leftSt || rightSt
};