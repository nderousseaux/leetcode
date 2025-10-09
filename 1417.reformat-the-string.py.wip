#
# @lc app=leetcode id=1417 lang=python3
#
# [1417] Reformat The String
#

# @lc code=start
class Solution:
    def reformat(self, s: str) -> str:
        res: str = ""

        letters = [c for c in s if c.isalpha()]
        digits = [c for c in s if c.isdigit()] 

        firstList = letters
        secondList = digits

        # If it's impossible to build a string
        if abs(len(letters) - len(digits)) > 1:
            return ""
        
        # Start if the greater list
        if len(letters) < len(digits):
            firstList = digits
            secondList = letters
        

        # Build the string
        while len(res) < len(s):
            res += firstList[0]
            del firstList[0]

            firstList, secondList = secondList, firstList

        return res        
        
# @lc code=end
