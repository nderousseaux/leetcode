#
# @lc app=leetcode id=2455 lang=python3
#
# [2455] Average Value of Even Numbers That Are Divisible by Three
#

# @lc code=start
class Solution:
    def averageValue(self, nums: List[int]) -> int:
        nums = [n for n in nums if not n%6]
        return sum(nums)//len(nums) if nums else 0
# @lc code=end
