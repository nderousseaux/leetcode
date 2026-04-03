#
# @lc app=leetcode id=2496 lang=python3
#
# [2496] Maximum Value of a String in an Array
#

# @lc code=start
class Solution:
    def maximumValue(self, strs: List[str]) -> int:
        m: int = -1

        for s in strs:
            try:
                value = int(s)
            except:
                value = len(s)
            m = max(m, value)


        return m
# @lc code=end
