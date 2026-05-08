#
# @lc app=leetcode id=2582 lang=python3
#
# [2582] Pass the Pillow
#

# @lc code=start
class Solution:
    def passThePillow(self, n: int, time: int) -> int:
        n = n - 1 # Because nobody count from 1

        return (
            ((time % n) if time // n % 2 == 0 else n - (time % n))
            + 1
        )

# @lc code=end
