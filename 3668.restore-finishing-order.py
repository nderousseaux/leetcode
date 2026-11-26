#
# @lc app=leetcode id=3668 lang=python3
#
# [3668] Restore Finishing Order
#

# @lc code=start
class Solution:
    def recoverOrder(self, order: List[int], friends: List[int]) -> List[int]:
        return [code for code in order if code in friends]
# @lc code=end
