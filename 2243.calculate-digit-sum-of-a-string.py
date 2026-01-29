#
# @lc app=leetcode id=2243 lang=python3
#
# [2243] Calculate Digit Sum of a String
#

# @lc code=start
class Solution:
    def digitSum(self, s: str, k: int) -> str:
        while(len(s) > k):
            # 1. Group
            s = [s[i:i+k] for i in range(0, len(s), k)]
            
            # 2. Sum of digit
            s = [sum([int(i) for i in g]) for g in s]
            
            # 3. Merge
            s = "".join([str(i) for i in s])

        return s
# @lc code=end

