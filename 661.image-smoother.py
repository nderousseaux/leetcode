#
# @lc app=leetcode id=661 lang=python3
#
# [661] Image Smoother
#

# @lc code=start
class Solution:
    def imageSmoother(self, img: List[List[int]]) -> List[List[int]]:
        # Get case, none if outside
        def g(x, y):
            try:
                if x < 0 or y < 0:
                    raise IndexError;
                return img[x][y]
            except:
                return None

        res = []

        for x in range(len(img)):
            res.append([])
            for y in range(len(img[x])):
                cases = [g(x+a, y+b) for a in range(-1, 2) for b in range(-1, 2)]
                cases = [c for c in cases if c != None]
                res[x].append(sum(cases)//len(cases))

        return res
        
# @lc code=end