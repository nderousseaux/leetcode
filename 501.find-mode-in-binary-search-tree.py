#
# @lc app=leetcode id=501 lang=python3
#
# [501] Find Mode in Binary Search Tree
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def findMode(self, root: Optional[TreeNode]) -> List[int]:
        occ = {}

        # trough the tree
        def f(x):
            f(x.left) if x.left else None
            f(x.right) if x.right else None
            occ[x.val] = occ.get(x.val, 0) + 1 if x else None

        
        f(root)
        # Get max frequency
        maxValue = max(occ.values())

        return [i for i in occ if occ[i] == maxValue]
# @lc code=end

