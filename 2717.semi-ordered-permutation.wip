#
# @lc app=leetcode id=2717 lang=python3
#
# [2717] Semi-Ordered Permutation
#

# @lc code=start
class Solution:
    def semiOrderedPermutation(self, nums: List[int]) -> int:
        n: int = len(nums)
        one: int = nums.index(1)
        last: int = nums.index(n)

        swap: int = 1 if one > last else 0

        return (
            one +           # Get one to the left
            n - 1 - last -  # Get one to the right
            swap
        )
# @lc code=end
