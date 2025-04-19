#
# @lc app=leetcode id=455 lang=python3
#
# [455] Assign Cookies
#

# @lc code=start
class Solution:
    def findContentChildren(self, g: List[int], s: List[int]) -> int:
        """
        :type g: List[int]
        :type s: List[int]
        :rtype: int
        """
        # Sort the greed factor and cookie sizes
        g.sort()
        s.sort()

        # Initialize pointers for children and cookies
        child_i = 0
        cookie_i = 0

        # Iterate until we run out of children or cookies
        while child_i < len(g) and cookie_i < len(s):
            # If the current cookie can satisfy the current child
            if s[cookie_i] >= g[child_i]:
                child_i += 1
        
            # Move to the next cookie
            cookie_i += 1
        # The number of content children is the number of children
        # that have been satisfied
        return child_i
# @lc code=end

