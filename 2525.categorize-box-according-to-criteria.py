#
# @lc app=leetcode id=2525 lang=python3
#
# [2525] Categorize Box According to Criteria
#

# @lc code=start
class Solution:
    def categorizeBox(self, length: int, width: int, height: int, mass: int) -> str:
        v = lambda l, w, h: l * w * h

        bulky, heavy = False, False

        if (
                length >= 10**4 or
                width >= 10**4 or
                height >= 10**4 or
                v(length, width, height) >= 10**9
        ):
            bulky = True

        if mass >= 100:
            heavy = True

        if bulky and heavy:
            return "Both"
        elif not bulky and not heavy:
            return "Neither"
        elif bulky and not heavy:
            return "Bulky"
        return "Heavy"
# @lc code=end
