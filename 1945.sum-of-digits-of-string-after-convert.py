#
# @lc app=leetcode id=1945 lang=python3
#
# [1945] Sum of Digits of String After Convert
#

# @lc code=start
class Solution:
    def getLucky(self, s: str, k: int) -> int:
        # Step 1: convert
        res = ''.join([str(ord(n) - 96) for n in s])
        # Step 2: transform k times
        for _ in range(k):
            res = str(sum([int(d) for d in res]))

        return int(res)
# @lc code=end

