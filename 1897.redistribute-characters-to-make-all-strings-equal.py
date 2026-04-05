#
# @lc app=leetcode id=1897 lang=python3
#
# [1897] Redistribute Characters to Make All Strings Equal
#

# @lc code=start
class Solution:
    def makeEqual(self, words: List[str]) -> bool:
        count = {}

        for w in words:
            for c in w:
                if c not in count:
                    count[c] = 1
                else:
                    count[c] += 1
        
        # Test if there is an equal number letter
        return all(v % len(words) == 0 for v in count.values())
        
# @lc code=end

