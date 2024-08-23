/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (!preorder.length && !inorder.length) return null
    
    // create root node from first element in preorder
    const root = new TreeNode(preorder[0])
    
    // find idx of preorder root w/in inorder
    let preOrdRootIdx = inorder.indexOf(preorder[0])
    
    // recursively create left subtree
    root.left = buildTree(
        preorder.slice(1, preOrdRootIdx + 1), 
        inorder.slice(0, preOrdRootIdx))
    
    // recursively create right subtree
    root.right = buildTree(
        preorder.slice(preOrdRootIdx + 1), 
        inorder.slice(preOrdRootIdx + 1))
    return root
};