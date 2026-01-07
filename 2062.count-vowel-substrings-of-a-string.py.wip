#
# @lc app=leetcode id=2062 lang=python3
#
# [2062] Count Vowel Substrings of a String
#

# @lc code=start
class Solution:
    def countVowelSubstrings(self, word: str) -> int:
        res = 0
        for i in range(len(word)):
            for j in range(i+1, len(word)):
                if (
                    all(
                        [v in word[i:j+1] for v in ["a", "e", "i", "o", "u"]]
                    ) and
                    len(set(word[i:j+1])) == 5
                ):
                    res += 1        
        return res
# @lc code=end

