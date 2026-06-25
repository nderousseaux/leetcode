#
# @lc app=leetcode id=2951 lang=python3
#
# [2951] Find the Peaks
#

# @lc code=start
class Solution:
    def findPeaks(self, mountain: List[int]) -> List[int]:
        res: List[int] = []
        for i in range(1, len(mountain) - 1):
            if mountain[i-1] < mountain[i] and mountain[i+1] < mountain[i]:
                res.append(i)

        return res
# @lc code=end
