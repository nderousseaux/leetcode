#
# @lc app=leetcode id=1455 lang=python3
#
# [1455] Check If a Word Occurs As a Prefix of Any Word in a Sentence
#

# @lc code=start
class Solution:
    def isPrefixOfWord(self, sentence: str, searchWord: str) -> int:
        for i,  word in enumerate(sentence.split(" ")):
            if word.startswith(searchWord):
                return i + 1
        return -1
# @lc code=end

