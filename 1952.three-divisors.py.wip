#
# @lc app=leetcode id=1952 lang=python3
#
# [1952] Three Divisors
#

# @lc code=start
class Solution:
    def isThree(self, n: int) -> bool:
        nDiv = 2

        for i in range(2, int(n/2)+1):
            print(i)
            if n % i == 0:
                nDiv += 1
            if nDiv > 3:
                break
        
        return nDiv == 3
        
# @lc code=end

