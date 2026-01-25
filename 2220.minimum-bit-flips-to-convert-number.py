#
# @lc app=leetcode id=2220 lang=python3
#
# [2220] Minimum Bit Flips to Convert Number
#

# @lc code=start
class Solution:
    def minBitFlips(self, start: int, goal: int) -> int:
        binS = bin(start)[2:]
        binG = bin(goal)[2:]
        binS = binS.zfill(max(len(binG), len(binS)))
        binG = binG.zfill(max(len(binG), len(binS)))

        return len([i for i in range(len(binS)) if binS[i] != binG[i]])

# @lc code=end

