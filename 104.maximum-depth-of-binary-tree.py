#
# @lc app=leetcode id=104 lang=python3
#
# [104] Maximum Depth of Binary Tree
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        if root is None:
            return 0
        if root.left is None and root.right is None:
            return 1
        elif root.left is None:
            return 1 + self.maxDepth(root.right)
        elif root.right is None:
            return 1 + self.maxDepth(root.left)
        else:
            return 1 + max(self.maxDepth(root.left), self.maxDepth(root.right))
        
# @lc code=end

