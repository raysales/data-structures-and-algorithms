# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        if not root:
            return None
        
        if root == p or root == q:
            return root
        
        left_ST = self.lowestCommonAncestor(root.left, p, q)
        right_ST = self.lowestCommonAncestor(root.right, p, q)
        
        if left_ST and right_ST:
            return root
        else:
            return left_ST or right_ST