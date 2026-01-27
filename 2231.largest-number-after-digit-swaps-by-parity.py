from typing import List

#
# @lc app=leetcode id=2231 lang=python3
#
# [2231] Largest Number After Digit Swaps by Parity
#

# @lc code=start
class Solution:
    def largestInteger(self, num: int) -> int:
        pMap, odd, even = [], [], []
        
        for i in str(num):
            i = int(i)
            pMap.append(i % 2 == 0)
            (even if i % 2 else odd).append(i)

        # Sort
        odd.sort()
        even.sort()

        return int(
            "".join([str(odd.pop()) if i else str(even.pop()) for i in pMap])
        )
        
# @lc code=end

