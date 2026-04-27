#
# @lc app=leetcode id=2200 lang=python3
#
# [2200] Find All K-Distant Indices in an Array
#

# @lc code=start
class Solution:
    def findKDistantIndices(self, nums: List[int], key: int, k: int) -> List[int]:
        res: List[int] = []
        for i in range(len(nums)):
            # exists at least one index j such that |i - j| <= k and nums[j] == key.
            exist = False
            for j in range(max(0, i-k), min(len(nums), i+k+1)):
                if nums[j] == key:
                    exist = True
                    break
            if exist:
                res.append(i)
        
        return res
# @lc code=end

