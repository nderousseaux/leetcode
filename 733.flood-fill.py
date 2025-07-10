#
# @lc app=leetcode id=733 lang=python3
#
# [733] Flood Fill
#

# @lc code=start
class Solution:
    def floodFill(self, image: List[List[int]], sr: int, sc: int, color: int) -> List[List[int]]:
        baseColor = image[sr][sc]

        def fill(x,y):
            if x < 0 or x >= len(image): return
            if y < 0 or y >= len(image[0]): return

            if image[x][y] == color: return
            if image[x][y] != baseColor: return

            image[x][y] = color

            [fill(i[0], i[1]) for i in [[x+1, y], [x-1, y], [x, y+1], [x, y-1]]]

        fill(sr, sc)
        return image
        
# @lc code=end

