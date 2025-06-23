#
# @lc app=leetcode id=653 lang=python3
#
# [653] Two Sum IV - Input is a BST
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def findTarget(self, root: Optional[TreeNode], k: int) -> bool:
        values = {}
        def through(node):
            if not node: return False

            if node.val in values: return True

            values[k - node.val] = True
            return through(node.left) or through(node.right)

        return through(root)
# @lc code=end

