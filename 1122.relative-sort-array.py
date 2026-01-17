#
# @lc app=leetcode id=1122 lang=python3
#
# [1122] Relative Sort Array
#

# @lc code=start
from typing import List

class Solution:
    def relativeSortArray(self, arr1: List[int], arr2: List[int]) -> List[int]:
        arr1.sort(key=lambda e: arr2.index(e) if e in arr2 else e+len(arr2))
        return arr1

        
# @lc code=end
