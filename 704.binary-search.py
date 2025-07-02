#
# @lc app=leetcode id=704 lang=python3
#
# [704] Binary Search
#

# @lc code=start
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        # Dicotomic research
        left = 0
        right = len(nums) - 1
        
        while left <= right:
            index = left + (right - left)//2
            
            if nums[index] == target:
                return index
            elif nums[index] < target:
                left = index + 1
            else:
                right = index - 1



        return -1
# @lc code=end

