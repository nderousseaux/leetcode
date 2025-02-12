#
# @lc app=leetcode id=20 lang=python3
#
# [20] Valid Parentheses
#

# @lc code=start
class Solution:
    def isValid(self, s: str) -> bool:
        # We define a stack to store the left parentheses
        stack = []

        # We define a dictionary to store the mapping of the parentheses
        mapping = {")": "(", "}": "{", "]": "["}

        for char in s:
            # If the caracter is a closing one, and that is the right one
            if char in mapping and stack and stack[-1] == mapping[char]:
                # We pop the last one
                stack.pop()
            # If the caracter is an opening one
            elif char in mapping.values():
                # We append it to the stack
                stack.append(char)
            
            # If the caracter is a closing one, but not the good one
            else:
                return False
        # If the stack is empty, that means that all the parentheses are valid
        return True if not stack else False
        
# @lc code=end

