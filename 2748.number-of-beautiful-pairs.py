#
# @lc app=leetcode id=2748 lang=python3
#
# [2748] Number of Beautiful Pairs
#

# @lc code=start
import math

class Solution:
    def countBeautifulPairs(self, nums: List[int]) -> int:
        def isCoprime(i: int, j: int) -> bool:
            return math.gcd(i, j) == 1

        res: int = 0
        for i in range(len(nums)):
            for j in range(i+1, len(nums)):
                if isCoprime(int(str(nums[i])[0]), int(str(nums[j])[-1])):
                    res += 1
        return res
# @lc code=end
