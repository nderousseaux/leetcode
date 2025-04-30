#
# @lc app=leetcode id=485 lang=python3
#
# [485] Max Consecutive Ones
#

# @lc code=start
class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        res = max(
            map(
                len, 
                "".join(map(str, nums)).split("0")
            )
        )
        return res
# @lc code=end

