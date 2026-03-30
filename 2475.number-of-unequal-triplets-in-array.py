#
# @lc app=leetcode id=2475 lang=python3
#
# [2475] Number of Unequal Triplets in Array
#

# @lc code=start
class Solution:
    def unequalTriplets(self, nums: List[int]) -> int:
        res = 0
        for i in range(len(nums)):
            for j in range(i+1, len(nums)):
                for k in range(j+1, len(nums)):
                    if nums[i] != nums[j] and nums[i] != nums[k] and nums[j] != nums[k]:
                        res += 1

        return res

# @lc code=end
