#
# @lc app=leetcode id=1046 lang=python3
#
# [1046] Last Stone Weight
#

# @lc code=start
from typing import List

class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        while len(stones) > 1:
            stones.sort()
            
            # Take the two bigger
            x = stones[-1]
            y = stones[-2]

            # Remove the two biggest stones
            stones.pop()
            stones.pop()

            # If not equal, add the difference back to the list
            if x != y:
                stones.append(x - y)

        return stones[0] if stones else 0
# @lc code=end

