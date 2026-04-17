#
# @lc app=leetcode id=2535 lang=python3
#
# [2535] Difference Between Element Sum and Digit Sum of an Array
#

# @lc code=start
class Solution:
    def differenceOfSum(self, nums: List[int]) -> int:
        eSum = 0
        dSum = 0

        for n in nums:
            eSum += n
            dSum += sum([int(d) for d in list(str(n))])

        return abs(eSum - dSum)
# @lc code=end
