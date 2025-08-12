#
# @lc app=leetcode id=938 lang=python3
#
# [938] Range Sum of BST
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rangeSumBST(self, root: Optional[TreeNode], low: int, high: int) -> int:
        res = 0
        def through(r):
            nonlocal res
            if r.val >= low and r.val <= high:
                res += r.val
            if r.left != None:
                through(r.left)
            if r.right != None:
                through(r.right)

        through(root)
        return res
# @lc code=end