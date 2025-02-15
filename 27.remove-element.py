#
# @lc app=leetcode id=27 lang=python3
#
# [27] Remove Element
#

# @lc code=start
class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        insert_index = 0
        for i in nums:
            if i != val:
                nums[insert_index] = i
                insert_index += 1
        return insert_index

# @lc code=end