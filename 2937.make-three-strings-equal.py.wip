#
# @lc app=leetcode id=2937 lang=python3
#
# [2937] Make Three Strings Equal
#

# @lc code=start
class Solution:
    def findMinimumOperations(self, s1: str, s2: str, s3: str) -> int:
        res: int = 0
        ss: List[str] = [s1, s2, s3]

        # Make all string equal
        min_length: int = min([len(s) for s in ss])
        for i, s in enumerate(ss):
            res += len(s) - min_length
            ss[i] = s[:min_length]

        while len(set(ss)) > 1:
            ss = [s[:-1] for s in ss]
            res += 3


        return -1 if ss[0] == "" else res
# @lc code=end
