#
# @lc app=leetcode id=2264 lang=python3
#
# [2264] Largest 3-Same-Digit Number in String
#

# @lc code=start
class Solution:
    def largestGoodInteger(self, num: str) -> str:
        res = -1

        for i in range(len(num)-2):
            c = set(list(num[i:i+3]))
            if len(c) == 1:
                res = max(res, int(c.pop()))


        return str(res)*3 if res >= 0 else ""
# @lc code=end

