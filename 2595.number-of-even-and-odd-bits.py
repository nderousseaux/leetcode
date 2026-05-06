#
# @lc app=leetcode id=2595 lang=python3
#
# [2595] Number of Even and Odd Bits
#

# @lc code=start
class Solution:
    def evenOddBit(self, n: int) -> List[int]:
        b: str= str(bin(n))[2:][::-1]
        print(b)
        even: int = 0
        odd: int = 0
        for i in range(len(b)):
            if b[i] == "1":
                if i%2 == 0:
                    even+=1
                else:
                    odd+=1
        return [even, odd]
# @lc code=end
