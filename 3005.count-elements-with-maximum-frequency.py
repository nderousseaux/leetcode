#
# @lc app=leetcode id=3005 lang=python3
#
# [3005] Count Elements With Maximum Frequency
#

# @lc code=start
class Solution:
    def maxFrequencyElements(self, nums: List[int]) -> int:
        res = {}
        for n in nums:
            res[n] = res.get(n, 0) + 1

        m = max(res.values())

        return sum([v for v in res.values() if v == m])
# @lc code=end
