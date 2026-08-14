#
# @lc app=leetcode id=3024 lang=python3
#
# [3024] Type of Triangle
#

# @lc code=start
class Solution:
    def triangleType(self, nums: List[int]) -> str:
        if not (
            nums[0] + nums[1] > nums[2] and
            nums[0] + nums[2] > nums[1] and
            nums[1] + nums[2] > nums[0]
        ):
            return "none"

        n = len(set(nums))

        if n == 1:
            return "equilateral"
        elif n == 2:
            return "isosceles"
        return "scalene"
# @lc code=end
