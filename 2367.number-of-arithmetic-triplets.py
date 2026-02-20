#
# @lc app=leetcode id=2367 lang=python3
#
# [2367] Number of Arithmetic Triplets
#

# @lc code=start
class Solution:
    def arithmeticTriplets(self, nums: List[int], diff: int) -> int:
        res = 0
        num_set = set(nums)
        for i in nums:
            if i + diff in num_set and i + 2 * diff in num_set:
                res += 1
        
        return res
# @lc code=end

