#
# @lc app=leetcode id=1652 lang=python3
#
# [1652] Defuse the Bomb
#

# @lc code=start
from typing import List

class Solution:
    def decrypt(self, code: List[int], k: int) -> List[int]:
        res = []
        n = len(code)
        for idx, e in enumerate(code):
            if k == 0:
                res.append(0)
            elif k > 0: # Add the sum of the next k number
                r = sum([code[(idx + i) % n] for i in range(1, k + 1)])
                res.append(r)
            else: # k < 0, Add the sum of the previous k number
                r = sum([code[(idx - i) % n] for i in range(1, abs(k) + 1)])
                res.append(r)
                
        return res
# @lc code=end

