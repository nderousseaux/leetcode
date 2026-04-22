#
# @lc app=leetcode id=2553 lang=python3
#
# [2553] Separate the Digits in an Array
#

# @lc code=start
class Solution:
    def separateDigits(self, nums: List[int]) -> List[int]:
        res: List[int] = []
        for n in nums:
            res += [int(k) for k in str(n)]
        return res
# @lc code=end
