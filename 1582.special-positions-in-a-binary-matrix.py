#
# @lc app=leetcode id=1582 lang=python3
#
# [1582] Special Positions in a Binary Matrix
#

# @lc code=start
class Solution:
    def numSpecial(self, mat: List[List[int]]) -> int:
        res = 0
        for i in range(len(mat)):
            if(mat[i].count(1) == 1): # If there is only one 1 on line
                # Look if there is only one 1 on column
                if([r[mat[i].index(1)] for r in mat].count(1)==1):
                    res+=1
        

        return res
        
# @lc code=end

