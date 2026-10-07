#
# @lc app=leetcode id=3349 lang=python3
#
# [3349] Adjacent Increasing Subarrays Detection I
#

# @lc code=start
class Solution:
    def hasIncreasingSubarrays(self, nums: List[int], k: int) -> bool:
        def incr(n: List[int]) -> bool:
            for i in range(1, len(n)):
                if n[i] <= n[i-1]:
                    return False
            return True

        for a in range(len(nums)-2*k+1):
            b = a + k
            if (incr(nums[a:a+k]) and incr(nums[b:b+k])):
                return True
        return False
# @lc code=end
