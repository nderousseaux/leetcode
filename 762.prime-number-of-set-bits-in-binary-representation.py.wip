#
# @lc app=leetcode id=762 lang=python3
#
# [762] Prime Number of Set Bits in Binary Representation
#

# @lc code=start
class Solution:
    def get_number_of_set_bit(self, n):
        res = 0
        while n > 0:
            res += 1 if n%2 == 1 else 0
            n = n >> 1
        return res
    def is_prime(self, n):
        if n <= 1:
            return False
        if n <= 3:
            return True
        if n % 2 == 0 or n % 3 == 0:
            return False
        i = 5
        while i * i <= n:
            if n % i == 0 or n % (i + 2) == 0:
                return False
            i += 6
        return True
    def countPrimeSetBits(self, left: int, right: int) -> int:
        res = 0
        for i in range(left, right+1):
            res += 1 if  self.is_prime(self.get_number_of_set_bit(i)) else 0
        return res
# @lc code=end

