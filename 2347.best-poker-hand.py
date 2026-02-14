#
# @lc app=leetcode id=2347 lang=python3
#
# [2347] Best Poker Hand
#

# @lc code=start
class Solution:
    def bestHand(self, ranks: List[int], suits: List[str]) -> str:
        if max(Counter(suits).values()) == 5:
            return "Flush"
        
        if max(Counter(ranks).values()) >= 3:
            return "Three of a Kind"
        
        if max(Counter(ranks).values()) == 2:
            return "Pair"
        
        return "High Card"  
# @lc code=end

