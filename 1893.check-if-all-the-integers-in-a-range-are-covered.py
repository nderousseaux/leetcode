#
# @lc app=leetcode id=1893 lang=python3
#
# [1893] Check if All the Integers in a Range Are Covered
#

# @lc code=start
class Solution:
    def isCovered(self, ranges: List[List[int]], left: int, right: int) -> bool:
        domain=[]
        for i in ranges:
            for j in range(i[0],i[1]+1):
                domain.append(j)
        domain=set(domain)
        for i in range(left,right+1):
            if i not in domain:
                return False
        return True
# @lc code=end

