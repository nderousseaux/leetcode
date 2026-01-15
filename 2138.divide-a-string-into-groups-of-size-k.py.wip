#
# @lc app=leetcode id=2138 lang=python3
#
# [2138] Divide a String Into Groups of Size k
#

# @lc code=start
class Solution:
    def divideString(self, s: str, k: int, fill: str) -> List[str]:
        res: List[str] = []
        
        for i in range(0,len(s), k):
            res.append(s[i:i+k])

        res[-1] += "".join([fill for _ in range(len(res[-1] - k))])


        return res
        
# @lc code=end

