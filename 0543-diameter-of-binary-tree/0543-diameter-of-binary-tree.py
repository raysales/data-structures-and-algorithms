# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
'''
Insight:
    - Find the longest branches on the opposite sides of the root.
    - This path may or may not pass through the root.

Solution:
    - For each node, we calculate the height of the left and right subtrees
    - Height(root) = Max(Height(root.left), Height(root.right)) + 1
    - Find the maximum value of d=Height(root.left) + Height(root.right) across all nodes

    Summary: As we calculate the height recursively using Height(node) = Max(Height(node.left), Height(node.right)) + 1
             for each node, we need to compute the diameter as Height(node.left) + Height(node.right) and keep the max.

    Optional discussion:
        - Any ideas on how to find the longest path in a graph?
            - Is it NP complete? No, finding the SIMPLE longest path is NP complete.
                                - Equivalently, finding the SIMPLE shortest path is NP complete.

        - For shortest path, we use one of the famous algorithsm, such as Dijkstra or B.F. or F.W.
        - For longest path, we use one of the famous algorithsm, such as Dijkstra or B.F. or F.W, but just invert the sign of each weight.
'''

class Solution(object):
    def __init__(self):
        self.diameter = 0
    def diameterOfBinaryTree(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """   
        def Height(node):
            if not node:
                return 0
            l = Height(node.left)
            r = Height(node.right)
            self.diameter = max(self.diameter, l + r)
            return max(l, r) + 1
        Height(root)
        return self.diameter