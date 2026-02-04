#
# @lc app=leetcode id=2293 lang=python3
#
# [2293] Min Max Game
#

# @lc code=start
class Solution:
    def minMaxGame(self, nums: List[int]) -> int:
        while len(nums) > 1:
            nums = [
                min(nums[2 * i], nums[2 * i + 1])
                if i % 2 == 0 
                else max(nums[2 * i], nums[2 * i + 1])
                for i in range(int(len(nums)/2))
            ]
        return nums[0]
        
# @lc code=end

