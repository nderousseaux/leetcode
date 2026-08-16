#
# @lc app=leetcode id=3046 lang=python3
#
# [3046] Split the Array
#

# @lc code=start
class Solution:
    def isPossibleToSplit(self, nums: List[int]) -> bool:
        # Count all elements
        res: dict[int, int] = {}
        for n in nums:
            res[n] = res.get(n, 0) + 1
            if res[n] > 2:
                return False

        return True
# @lc code=end
