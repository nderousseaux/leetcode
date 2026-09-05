#
# @lc app=leetcode id=1773 lang=python3
#
# [1773] Count Items Matching a Rule
#

# @lc code=start
class Solution:
    def countMatches(self, items: List[List[str]], ruleKey: str, ruleValue: str) -> int:
        res: int = 0

        idxRule = ["type", "color", "name"].index(ruleKey)
        
        for i in items:
            res += 1 if i[idxRule] == ruleValue else 0
            

        return res
        
# @lc code=end

