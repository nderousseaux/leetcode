#
# @lc app=leetcode id=2578 lang=python3
#
# [2578] Split With Minimum Sum
#

# @lc code=start
class Solution:
    def splitNum(self, num: int) -> int:
        nums: List[int] = sorted([int(i) for i in str(num)])

        num1 = ""
        num2 = ""

        # Add lower first
        for i in range(len(nums)):
            if i%2 == 0:
                num1 += str(nums[i])
            else:
                num2 += str(nums[i])

        return int(num1) + int(num2)
# @lc code=end
