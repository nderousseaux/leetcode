#
# @lc app=leetcode id=1022 lang=python3
#
# [1022] Sum of Root To Leaf Binary Numbers
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sumRootToLeaf(self, root: Optional[TreeNode]) -> int:
        def dfs(node, current_binary):
            if not node:
                return 0
            
            current_binary = current_binary * 2 + node.val
            
            if not node.left and not node.right:
                return current_binary
            
            return dfs(node.left, current_binary) + dfs(node.right, current_binary)

        return dfs(root, 0)
        
# @lc code=end