from collections import Counter

#
# @lc app=leetcode id=884 lang=python3
#
# [884] Uncommon Words from Two Sentences
#

# @lc code=start
class Solution:
    def uncommonFromSentences(self, s1: str, s2: str) -> List[str]:
        l1 = s1.split(" ")
        l2 = s2.split(" ")
        combined = l1 + l2
        word_count = Counter(combined)
        return [word for word, count in word_count.items() if count == 1]
# @lc code=end

