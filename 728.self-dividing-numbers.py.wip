#
# @lc app=leetcode id=728 lang=python3
#
# [728] Self Dividing Numbers
#

# @lc code=start
class Solution:
    def isSelfDivisable(self, num: int):
        numStr = str(num)
        for n in numStr:
            if n == '0':
                return False
            if num % int(n) != 0:
                return False
        return True
    
    def selfDividingNumbers(self, left: int, right: int) -> List[int]:
        res = []
        l = left
        while l <= right:
            if self.isSelfDivisable(l):
                res.append(l)
            l+=1
        return res

# @lc code=end

