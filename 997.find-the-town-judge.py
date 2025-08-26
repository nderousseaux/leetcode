#
# @lc app=leetcode id=997 lang=python3
#
# [997] Find the Town Judge
#

# @lc code=start
class Solution:
    def findJudge(self, n: int, trust: List[List[int]]) -> int:
        if n == 1 and not trust:
            return 1

        trust_count = [0] * (n + 1)
        trusted_by_count = [0] * (n + 1)

        for a, b in trust:
            trust_count[a] += 1
            trusted_by_count[b] += 1

        for i in range(1, n + 1):
            if trust_count[i] == 0 and trusted_by_count[i] == n - 1:
                return i

        return -1

        
# @lc code=end

