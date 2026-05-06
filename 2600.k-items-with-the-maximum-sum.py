#
# @lc app=leetcode id=2600 lang=python3
#
# [2600] K Items With the Maximum Sum
#

# @lc code=start
class Solution:
    def kItemsWithMaximumSum(self, numOnes: int, numZeros: int, numNegOnes: int, k: int) -> int:
        res = min(k, numOnes)

        if k - numOnes - numZeros > 0:
            res -= k - numOnes - numZeros

        return res
# @lc code=end
