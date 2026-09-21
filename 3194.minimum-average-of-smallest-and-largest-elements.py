#
# @lc app=leetcode id=3194 lang=python3
#
# [3194] Minimum Average of Smallest and Largest Elements
#

# @lc code=start
class Solution:
    def minimumAverage(self, nums: List[int]) -> float:
        avg: List[float] = []
        for _ in range(int(len(nums)/2)):
            ma: int = max(nums)
            mi: int = min(nums)
            del nums[nums.index(ma)]
            del nums[nums.index(mi)]
            avg.append((mi+ma)/2)
        return min(avg)
# @lc code=end
