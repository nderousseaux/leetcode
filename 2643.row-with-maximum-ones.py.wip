#
# @lc app=leetcode id=2643 lang=python3
#
# [2643] Row With Maximum Ones
#

# @lc code=start
class Solution:
    def rowAndMaximumOnes(self, mat: List[List[int]]) -> List[int]:
        res: List[int] = [0,0]
        for i in range(len(mat)):
            n: int = len([_ for _ in mat[i] if _ == 1])
            if n > res[1]:
                res = [i, n]
        return res
# @lc code=end
