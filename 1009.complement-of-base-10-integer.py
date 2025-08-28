#
# @lc app=leetcode id=1009 lang=python3
#
# [1009] Complement of Base 10 Integer
#

# @lc code=start
class Solution:
    def bitwiseComplement(self, n: int) -> int:
        if n == 0:
            return 1
        
        # Find the bit length of n
        bit_length = n.bit_length()
        
        # Create a mask with all 1s for the bit length
        mask = (1 << bit_length) - 1
        
        # XOR with the mask to flip all bits
        return n ^ mask
# @lc code=end
