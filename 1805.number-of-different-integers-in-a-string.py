#
# @lc app=leetcode id=1805 lang=python3
#
# [1805] Number of Different Integers in a String
#

# @lc code=start
class Solution:
    def numDifferentIntegers(self, word: str) -> int:
        n = "".join([l if l.isnumeric() else " " for l in word]).split()
        n = [int(l) for l in n]
        
        return len(set(n))
        

# @lc code=end

