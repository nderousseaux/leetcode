from collections import Counter

#
# @lc app=leetcode id=1370 lang=python3
#
# [1370] Increasing Decreasing String
#

# @lc code=start
class Solution:
    def sortString(self, s: str) -> str:
        count = Counter(s)
        res = ""
        while len(res) < len(s):
            for ch in sorted(count.keys()):
                if count[ch]:
                    res += ch
                    count[ch] -= 1
            for ch in sorted(count.keys(), reverse=True):
                if count[ch]:
                    res += ch
                    count[ch] -= 1


        return res                 
# @lc code=end

