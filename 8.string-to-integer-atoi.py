#
# @lc app=leetcode id=8 lang=python3
#
# [8] String to Integer (atoi)
#

# @lc code=start
class Solution:
    def myAtoi(self, s: str) -> int:
        res = 0
        exp = 0        

        for i, c in enumerate(s.strip()[::-1]):
            if c.isdigit():
                res += int(c)*(10**exp)
                exp +=1

            # If it's the last, and it's a sign
            elif c in '-+' and i == len(s.strip()) - 1:
                if c is "-":
                    res *= -1

            # If that's not a digit, reset
            else:
                exp = 0
                res = 0
        
        # if it's going out of 32 bit
        if res > 2**31 - 1:
            res = 2**31 - 1
        elif res < -2**31:
            res = -2**31 

        return res
# @lc code=end

