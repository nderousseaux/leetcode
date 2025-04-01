#
# @lc app=leetcode id=387 lang=python3
#
# [387] First Unique Character in a String
#

# @lc code=start
class Solution:
  def firstUniqChar(self, s: str) -> int:
    # Create a dictionary to store the frequency of each character
    char_count = {}

    # Count the frequency of each character in the string
    for char in s:
      char_count[char] = char_count.get(char, 0) + 1

    # Find the first character with a frequency of 1
    for i, char in enumerate(s):
      if char_count[char] == 1:
        return i

    # If no unique character is found, return -1
    return -1
        
# @lc code=end

