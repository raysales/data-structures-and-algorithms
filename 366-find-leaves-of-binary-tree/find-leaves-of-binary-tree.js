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
 * @return {number[][]}
 */
var findLeaves = function(root) {
    const output = []

    const dfs = node => {
        // 0 based output arr so return - 1 for leaves children
        if (!node) return -1

        // get left & right subtree heights
        const leftHeight = dfs(node.left)
        const rightHeight = dfs(node.right)

        // get cur nodes height via max of left & right subtrees
        const curHeight = Math.max(leftHeight, rightHeight) + 1

        // initialize output's curr height to empty arr
        if (output.length === curHeight) output.push([])
    
        // push leaves into output's current height
        output[curHeight].push(node.val)

        return curHeight
    }

    dfs(root)
    return output
};