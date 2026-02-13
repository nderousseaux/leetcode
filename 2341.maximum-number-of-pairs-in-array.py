#
# @lc app=leetcode id=2341 lang=python3
#
# [2341] Maximum Number of Pairs in Array
#

# @lc code=start

import math
class Solution:
    def numberOfPairs(self, nums: List[int]) -> List[int]:
        # Get number of occurence of each
        dic = {}
        for i in nums:
            dic[i] = dic.get(i, 0) + 1
        
        return [
            sum([math.floor(i/2) for i in dic.values()]),
            len([i for i in dic.values() if i % 2 == 1])
        ]
# @lc code=end

