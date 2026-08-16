#
# @lc app=leetcode id=3042 lang=python3
#
# [3042] Count Prefix and Suffix Pairs I
#

# @lc code=start
class Solution:
    def countPrefixSuffixPairs(self, words: List[str]) -> int:
        def isPrefixAndSuffix(str1: str, str2: str) -> bool:
            if (
                (str1 == str2[:len(str1)])
                and
                (str1 == str2[-len(str1):])
            ):
                return True
            return False

        res: int = 0
        for i, w1 in enumerate(words):
            for w2 in words[i+1:]:
                res += 1 if isPrefixAndSuffix(w1, w2) else 0
        return res
# @lc code=end
