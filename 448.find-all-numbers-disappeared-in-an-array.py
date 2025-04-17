#
# @lc app=leetcode id=448 lang=python3
#
# [448] Find All Numbers Disappeared in an Array
#

# @lc code=start
class Solution:
    def findDisappearedNumbers(self, nums: List[int]) -> List[int]:
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        n = len(nums)
        # Create a set of all numbers from 1 to n
        num_set = set(range(1, n + 1))
        # Create a set from the input list
        nums_set = set(nums)
        # Find the difference between the two sets
        return list(num_set - nums_set)
# @lc code=end

