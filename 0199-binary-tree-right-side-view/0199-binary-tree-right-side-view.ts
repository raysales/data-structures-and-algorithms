/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function rightSideView(root: TreeNode | null): number[] {
    const output = [];
    dfs(root, 0, output);
    return output;
};

const dfs = (root: TreeNode | null, currentLevel: number, arrOFRightVal: number[]) => {
    if (root === null) {
        return;
    }

    if (currentLevel >= arrOFRightVal.length) {
        arrOFRightVal.push(root.val);
    }

    if (root.right) {
        dfs(root.right, currentLevel + 1, arrOFRightVal);
    }

    if (root.left) {
        dfs(root.left, currentLevel + 1, arrOFRightVal);
    }

    return arrOFRightVal;
}