#
# @lc app=leetcode id=2418 lang=python3
#
# [2418] Sort the People
#

# @lc code=start
class Solution:
    def sortPeople(self, names: List[str], heights: List[int]) -> List[str]:
        # Convert to dict
        dic: dict[str, int] = {}
        for i in range(len(heights)):
            dic[heights[i]] = names[i]

        heights.sort(reverse=True)

        # Get name sorted by height
        return [dic[heights[i]] for i in range(len(names))]
        
# @lc code=end

