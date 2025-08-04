#
# @lc app=leetcode id=806 lang=python3
#
# [806] Number of Lines To Write String
#

# @lc code=start
class Solution:
    def numberOfLines(self, widths: List[int], s: str) -> List[int]:
        line = 1
        rest = 0
        for l in s:
            w = widths[ord(l) - ord('a')]
            if rest + w > 100:
               rest = w
               line += 1 
            else:
                rest += w

        return [line, rest]
# @lc code=end

