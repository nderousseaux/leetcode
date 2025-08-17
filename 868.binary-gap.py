#
# @lc app=leetcode id=868 lang=python3
#
# [868] Binary Gap
#

# @lc code=start
class Solution:
    def binaryGap(self, n: int) -> int:
        count = False
        res = 0
        cur = 0
        while(n > 0):
            if n % 2 == 1:
                if count:
                    res = max(res, cur+1)
                    cur = 0
                else:
                    count = True
            elif n % 2 == 0 and count:
                cur += 1
            
            n = n // 2

        return res
# @lc code=end

