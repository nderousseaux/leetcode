#
# @lc app=leetcode id=1175 lang=python3
#
# [1175] Prime Arrangements
#

# @lc code=start
from math import factorial

class Solution:
    def numPrimeArrangements(self, n: int) -> int:
        primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
        nbPrimes = len([p for p in primes if p <= n])
        # Nb combination prime * nbCombination not prime
        res = factorial(nbPrimes) * factorial(n-nbPrimes)
        return res % (10**9 + 7)
# @lc code=end

