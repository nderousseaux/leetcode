#
# @lc app=leetcode id=2379 lang=python3
#
# [2379] Minimum Recolors to Get K Consecutive Black Blocks
#

# @lc code=start
class Solution:
    def minimumRecolors(self, blocks: str, k: int) -> int:
        res = len(blocks)
        for i in range(len(blocks) - k + 1):
            res = min(res, len([i for i in blocks[i:i+k] if i == 'W']))

        return res
        
# @lc code=end

