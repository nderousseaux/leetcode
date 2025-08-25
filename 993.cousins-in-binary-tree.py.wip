#
# @lc app=leetcode id=993 lang=python3
#
# [993] Cousins in Binary Tree
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isCousins(self, root: Optional[TreeNode], x: int, y: int) -> bool:
        # Store parent and depth for x and y
        self.px = self.dx = self.py = self.dy = None

        def dfs(node, parent, depth):
            if not node:
                return
            if node.val == x:
                self.px, self.dx = parent, depth
            if node.val == y:
                self.py, self.dy = parent, depth
            dfs(node.left, node, depth + 1)
            dfs(node.right, node, depth + 1)

        dfs(root, None, 0)
        return self.dx == self.dy and self.px != self.py        
# @lc code=end

