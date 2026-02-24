#
# @lc app=leetcode id=2180 lang=python3
#
# [2180] Count Integers With Even Digit Sum
#

# @lc code=start
class Solution:
    def countEven(self, num: int) -> int:
        res = 0
        for i in range(num, 0, -1):
            if sum([int(j) for j in str(i)]) % 2 == 0:
                res += 1
        return res
        
# @lc code=end

