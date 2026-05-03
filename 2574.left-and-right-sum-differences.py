#
# @lc app=leetcode id=2574 lang=python3
#
# [2574] Left and Right Sum Differences
#

# @lc code=start
class Solution:
    def leftRightDifference(self, nums: List[int]) -> List[int]:
        leftSum = []
        rightSum = []
        accLeft = 0
        accRight = 0

        for i in range(len(nums)):
            leftSum.append(accLeft)
            accLeft += nums[i]

            rightSum.insert(0, accRight)
            accRight += nums[len(nums)-i-1]

        return [abs(leftSum[i] - rightSum[i]) for i in range(len(rightSum))]
# @lc code=end
