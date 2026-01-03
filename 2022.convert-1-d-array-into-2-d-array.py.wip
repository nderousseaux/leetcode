#
# @lc app=leetcode id=2022 lang=python3
#
# [2022] Convert 1D Array Into 2D Array
#

# @lc code=start
class Solution:
    def construct2DArray(self, original: List[int], m: int, n: int) -> List[List[int]]:
        res = []

        if len(original) != m * n:
            return res
         
        i = 0
        for _ in range(m):
            res.append([])
            for _ in range(n):
                res[-1].append(original[i])
                i+=1


        return res
# @lc code=end

