#
# @lc app=leetcode id=441 lang=python3
#
# [441] Arranging Coins
#

# @lc code=start
class Solution:
    def arrangeCoins(self, n: int) -> int:
        """
        :type n: int
        :rtype: int
        """
        # Using the formula for the sum of the first k natural numbers:
        # k * (k + 1) / 2 <= n
        # Rearranging gives us a quadratic equation:
        # k^2 + k - 2n <= 0
        # We can use the quadratic formula to find the maximum k:
        # k = (-1 + sqrt(1 + 8n)) / 2

        return int((-1 + (1 + 8 * n) ** 0.5) // 2)
# @lc code=end

