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
 * @return {string}
 */
var smallestFromLeaf = function(root) {
    let smallestStr = ""
    dfs(root, "")
    return smallestStr
    
    function dfs(root, curStr) {
        if (!root) return
        // build curStr by prepending cur char to curStr
        //console.log("root.val + 97 = ", root.val + 97)
        curStr = String.fromCharCode(root.val + 97) + curStr
        
        // leaf node
        if (!root.left && !root.right) {
            // check for initial empty string & curStr < smallestStr
            //console.log({curStr})
            //console.log({smallestStr})
            if (smallestStr.length === 0 || curStr < smallestStr)
                smallestStr = curStr
        }
        // recurse for left & right children
        if (root.left) dfs(root.left, curStr)
        if (root.right) dfs(root.right, curStr)
    }
};