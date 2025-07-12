#
# @lc app=leetcode id=748 lang=python3
#
# [748] Shortest Completing Word
#

# @lc code=start
class Solution:
    def shortestCompletingWord(self, licensePlate: str, words: List[str]) -> str:
        licensePlate = ''.join([i.lower() for i in licensePlate if i.isalpha()])

        for w in sorted(words, key=len):
            for i in range(len(licensePlate)):
                l = licensePlate[i]
                if w.count(l) < licensePlate.count(l):
                    break
                if i == len(licensePlate) -1:
                    return w

        return ""
        
# @lc code=end

