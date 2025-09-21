#
# @lc app=leetcode id=1287 lang=python3
#
# [1287] Element Appearing More Than 25% In Sorted Array
#

# @lc code=start
from typing import List
class Solution:
    def findSpecialInteger(self, arr: List[int]) -> int:
        ls=[arr[len(arr)//4], arr[len(arr)//2], arr[len(arr)*3//4]]

        for l in ls:
            # Find the leftmost position of element l in the sorted array
            start = 0
            end = len(arr) - 1
            while start <= end:
                mid = (start + end) // 2
                if arr[mid] < l:
                    start = mid + 1
                else:
                    end = mid - 1
            left_pos = start
            
            # Find the rightmost position of element l in the sorted array
            start = 0
            end = len(arr) - 1
            while start <= end:
                mid = (start + end) // 2
                if arr[mid] <= l:
                    start = mid + 1
                else:
                    end = mid - 1
            right_pos = start
            
            start = left_pos
            end = right_pos
            if end - start > len(arr) // 4:
                return l
        return -1
# @lc code=end

