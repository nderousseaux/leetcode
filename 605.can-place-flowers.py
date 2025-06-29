#
# @lc app=leetcode id=605 lang=python3
#
# [605] Can Place Flowers
#

# @lc code=start
class Solution:
    def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
        for i in range(len(flowerbed)):
            if (
                flowerbed[i] == 0 and
                (i == 0 or flowerbed[i-1] == 0) and
                (i == len(flowerbed)-1 or flowerbed[i+1] == 0)
            ):
                flowerbed[i] = 1
                n -= 1
            if n <= 0:
                return True
        return False
# @lc code=end

