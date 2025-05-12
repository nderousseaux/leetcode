#
# @lc app=leetcode id=22 lang=python3
#
# [22] Generate Parentheses
#

# @lc code=start
class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        res = []

        def complete(oP, cP, s):
            # If there is enough opening and closing parenthesis -> end
            if oP == cP and oP + cP == n * 2:
                res.append(s)
                return

            # If there is not enough opening parenthesis, we opening one
            if oP < n:
                complete(oP + 1, cP, s + "(")

            # If there is not enough closing parenthesis, clone one
            if cP < oP:
                complete(oP, cP + 1,  s + ")")
            
        complete(0, 0, "")

        return res
            
        
# @lc code=end

