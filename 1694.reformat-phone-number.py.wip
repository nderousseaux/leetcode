#
# @lc app=leetcode id=1694 lang=python3
#
# [1694] Reformat Phone Number
#

# @lc code=start
class Solution:
    def reformatNumber(self, number: str) -> str:
        res = ""

        # Step 1, delete spaces and dashes
        digits = [c for c in number if c.isdigit()]

        # Step 2 : Group the digit until there are 4 are fewer
        while len(digits) > 4:
            res += "".join(digits[0:3] + ["-"])
            digits = digits[3:]

        # Step 3 : Groups the lasts digits
        if len(digits) == 4:
            res += "".join(digits[:2] + ["-"] + digits[2:])
        else:
            res += "".join(digits[:len(digits)])
        
        
        return res
# @lc code=end

