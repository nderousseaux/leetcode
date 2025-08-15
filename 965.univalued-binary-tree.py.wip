#
# @lc app=leetcode id=965 lang=python3
#
# [965] Univalued Binary Tree
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isUnivalTree(self, root: Optional[TreeNode]) -> bool:
        uni = root.val

        def through(r):
            if r.val != uni:
                return False

            left_result = True
            right_result = True
            
            if r.left != None:
                left_result = through(r.left)
            
            if r.right != None:
                right_result = through(r.right)
                
            return left_result and right_result

        return through(root)

# @lc code=end

