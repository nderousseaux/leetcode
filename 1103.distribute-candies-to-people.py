#
# @lc app=leetcode id=1103 lang=python3
#
# [1103] Distribute Candies to People
#

# @lc code=start
class Solution:
    def distributeCandies(self, candies: int, num_people: int) -> List[int]:
        res = [0 for _ in range(num_people)]
        i = 0
        while candies > 0:
            res[i%num_people] += min(i+1, candies)
            i+=1
            candies-=i

        return res
        
# @lc code=end

