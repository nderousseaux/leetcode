#
# @lc app=leetcode id=1598 lang=python3
#
# [1598] Crawler Log Folder
#

# @lc code=start
class Solution:
    def minOperations(self, logs: List[str]) -> int:
        res = 0
        for l in logs:
            if l[:2] == "..":
                if res > 0:
                    res -= 1
            elif l[:2] != "./":
                res += 1
        
        return res 
# @lc code=end

