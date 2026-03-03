#
# @lc app=leetcode id=2269 lang=python3
#
# [2269] Find the K-Beauty of a Number
#

# @lc code=start
class Solution:
    def divisorSubstrings(self, num: int, k: int) -> int:
        res = 0
        num = str(num)
        for i in range(len(num)-k+1):
            d = int(num[i:i+k])
            if d == 0:
                continue
            if int(num) % d == 0:
                res += 1

        return res
        
# @lc code=end

