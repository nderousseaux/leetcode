#
# @lc app=leetcode id=1791 lang=python3
#
# [1791] Find Center of Star Graph
#

# @lc code=start
class Solution:
    def findCenter(self, edges: List[List[int]]) -> int:
        # Find what node is in common in the two firsts edges
        return list(set(edges[0]).intersection(edges[1]))[0]
        
# @lc code=end

