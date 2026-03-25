#
# @lc app=leetcode id=2465 lang=python3
#
# [2465] Number of Distinct Averages
#

# @lc code=start
class Solution:
    def distinctAverages(self, nums: List[int]) -> int:
        averages: List[float] = []
        while len(nums) > 0:
            ma = max(nums)
            nums.remove(ma)
            mi = min(nums)
            nums.remove(mi)
            averages.append((ma + mi) / 2)

        return len(set(averages))

# @lc code=end
