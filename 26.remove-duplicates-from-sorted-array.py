#
# @lc app=leetcode id=26 lang=python3
#
# [26] Remove Duplicates from Sorted Array
#

# @lc code=start
from typing import List

class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        insert_index = 0
        for i in nums:
            if insert_index == 0 or i != nums[insert_index - 1]:
                nums[insert_index] = i
                insert_index += 1
        return insert_index
# @lc code=end
