#
# @lc app=leetcode id=66 lang=python3
#
# [66] Plus One
#

# @lc code=start
class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:

        # We pass through the digits in reverse order

        for i in range(len(digits)):
            # if the digit is not 9, we can just add 1 to it and return the list
            if digits[~i] != 9:
                digits[~i] += 1
                return digits
            
            # if the digit is 9, we set it to 0, and continue to the next digit
            digits[~i] = 0
        
        # if we reach this point, it means all the digits are 9, so we add a 1 to the beginning of the list
        return [1] + digits
        
# @lc code=end

