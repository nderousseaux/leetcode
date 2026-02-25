#
# @lc app=leetcode id=2389 lang=python3
#
# [2389] Longest Subsequence With Limited Sum
#

# @lc code=start
class Solution:
    def answerQueries(self, nums: List[int], queries: List[int]) -> List[int]:
        res: List[int] = []
        for i in range(len(queries)):
            res.append(0)
            s = 0
            for item in sorted(nums):
                s += item
                if s > queries[i]:
                    break
                res[i]+=1
            
        return res
        
# @lc code=end

