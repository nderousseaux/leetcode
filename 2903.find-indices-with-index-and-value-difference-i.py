#
# @lc app=leetcode id=2903 lang=python3
#
# [2903] Find Indices With Index and Value Difference I
#

# @lc code=start
class Solution:
    def findIndices(self, nums: List[int], indexDifference: int, valueDifference: int) -> List[int]:
        for i in range(len(nums)):
            for j in range(len(nums)):
                if (
                    abs(i-j) >= indexDifference and
                    abs(nums[i] - nums[j]) >= valueDifference
                ):
                    return [i, j]

        return [-1, -1]

# @lc code=end
