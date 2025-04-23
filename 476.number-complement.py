#
# @lc app=leetcode id=476 lang=python3
#
# [476] Number Complement
#

# @lc code=start
class Solution:
    def findComplement(self, num: int) -> int:
        """
        Calculate the complement of a given integer.

        The complement of a number is obtained by flipping all bits in its binary representation.

        Args:
            num (int): The input integer.

        Returns:
            int: The complement of the input integer.
        """
        # Calculate the number of bits in the binary representation of num
        num_bits = num.bit_length()
        
        # Create a mask with all bits set to 1 for the length of num_bits
        mask = (1 << num_bits) - 1
        
        # XOR num with the mask to get the complement
        return num ^ mask
# @lc code=end

