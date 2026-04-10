#
# @lc app=leetcode id=2511 lang=python3
#
# [2511] Maximum Enemy Forts That Can Be Captured
#

# @lc code=start
class Solution:
    def captureForts(self, forts: List[int]) -> int:
        res: int = 0
        currDistance: int = 0
        startElement: int = -2

        for f in forts:
            if f == 0:
                currDistance+=1
                continue
            if (
                (f == -1 and startElement == 1) or
                (f == 1 and startElement == -1)
            ):
                res = max(res, currDistance)

            currDistance = 0
            startElement = f
        return res


# @lc code=end
