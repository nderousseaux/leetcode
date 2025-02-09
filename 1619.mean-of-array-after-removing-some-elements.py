#
# @lc app=leetcode id=1619 lang=python3
#
# [1619] Mean of Array After Removing Some Elements
#

# @lc code=start
from typing import List

class Solution:
    def trimMean(self, arr: List[int]) -> float:
        # Sort the array
        arr.sort()

        # Remove 5% of the elements from the start and end
        n = len(arr)
        arr = arr[n//20:n-n//20]

        # Calculate the mean
        return sum(arr) / len(arr)
        
# @lc code=end

