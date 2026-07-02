#
# @lc app=leetcode id=2974 lang=python3
#
# [2974] Minimum Number Game
#

# @lc code=start
class Solution:
    def numberGame(self, nums: List[int]) -> List[int]:
        arr: List[int] = []
        while nums:
            a = min(nums)
            nums.remove(a)

            arr.append(min(nums))
            nums.remove(arr[-1])

            arr.append(a)
        return arr

# @lc code=end
