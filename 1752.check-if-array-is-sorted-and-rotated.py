#
# @lc app=leetcode id=1752 lang=python3
#
# [1752] Check if Array Is Sorted and Rotated
#

# @lc code=start
class Solution:
    def check(self, nums: List[int]) -> bool:
        jokerUsed = False
        for i in range(len(nums)):
            if nums[i] > nums[(i+1) % len(nums)]:
                # If this is the first time
                if not jokerUsed:
                    jokerUsed = True
                else:
                    return False

        return True
# @lc code=end

