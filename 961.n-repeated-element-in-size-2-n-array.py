#
# @lc app=leetcode id=961 lang=python3
#
# [961] N-Repeated Element in Size 2N Array
#

# @lc code=start
class Solution:
    def repeatedNTimes(self, nums: List[int]) -> int:
        n = len(nums)/2
        elem = {}
        for e in nums:
            if elem.get(e) == None:
                elem[e] = 1
            else:
                elem[e] += 1
        
        return [k for k, v in elem.items() if v == n][0]
# @lc code=end
