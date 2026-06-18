#
# @lc app=leetcode id=2917 lang=python3
#
# [2917] Find the K-or of an Array
#

# @lc code=start
class Solution:
    def findKOr(self, nums: List[int], k: int) -> int:
        res = 0
        for i in range(32):
            # we looking for number of nums divisible by 2**i
            if len([n for n in nums if (n >> i) & 1 == 1]) >= k:
                res += 2**i

        return res
# @lc code=end
