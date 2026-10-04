#
# @lc app=leetcode id=3314 lang=python3
#
# [3314] Construct the Minimum Bitwise Array I
#

# @lc code=start
class Solution:
    def minBitwiseArray(self, nums: List[int]) -> List[int]:
        res: List[int] = []
        for v in nums:
            if v % 2 == 0:
                res.append(-1)
            else:
                res.append(v - ((v + 1) & (-v - 1)) // 2)
        return res
# @lc code=end
