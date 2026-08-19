#
# @lc app=leetcode id=3069 lang=python3
#
# [3069] Distribute Elements Into Two Arrays I
#

# @lc code=start
class Solution:
    def resultArray(self, nums: List[int]) -> List[int]:
        arr1: List[int] = [nums[0]]
        arr2: List[int] = [nums[1]]

        for n in nums[2:]:
            if arr1[-1] > arr2[-1]:
                arr1.append(n)
            else:
                arr2.append(n)

        return arr1 + arr2
# @lc code=end
