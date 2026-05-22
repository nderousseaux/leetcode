#
# @lc app=leetcode id=2729 lang=python3
#
# [2729] Check if The Number is Fascinating
#

# @lc code=start
class Solution:
    def isFascinating(self, n: int) -> bool:
        s: str = str(n) + str(n * 2) + str(n * 3)
        return (
            len(s) == 9 and
            len(s) == len(set(s)) and
            "0" not in s
        )
# @lc code=end
