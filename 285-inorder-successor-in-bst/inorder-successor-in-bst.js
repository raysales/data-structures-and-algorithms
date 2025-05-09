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
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {
    let successor = null

    while (root) {
        // if root <= p then search right ST
        if (root.val <= p.val) root = root.right
        else {
            // curr root is possible successor so search left ST
            // for closer val to root if one exists
            successor = root
            root = root.left
        }
    }
    return successor
};