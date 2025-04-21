#
# @lc app=leetcode id=461 lang=python3
#
# [461] Hamming Distance
#

# @lc code=start
class Solution:
    def hammingDistance(self, x: int, y: int) -> int:
        """
        Calculate the Hamming distance between two integers.

        The Hamming distance is the number of positions at which the corresponding bits are different.

        Args:
            x (int): The first integer.
            y (int): The second integer.

        Returns:
            int: The Hamming distance between x and y.
        """
        return bin(x ^ y).count('1')        
# @lc code=end

