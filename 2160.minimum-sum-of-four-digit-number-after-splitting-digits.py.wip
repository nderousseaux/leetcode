#
# @lc app=leetcode id=2160 lang=python3
#
# [2160] Minimum Sum of Four Digit Number After Splitting Digits
#

# @lc code=start
class Solution:
    def minimumSum(self, num: int) -> int:
        nums = sorted([int(i) for i in str(num)])
        new1 = nums[0]*10 + nums[2]
        new2 = nums[1]*10 + nums[3]

        return new1 + new2
        
# @lc code=end

