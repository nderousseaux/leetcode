#
# @lc app=leetcode id=1576 lang=python3
#
# [1576] Replace All ?'s to Avoid Consecutive Repeating Characters
#

# @lc code=start
class Solution:
    def modifyString(self, s: str) -> str:
        letters = list("abcdefghijklmnopqrstuvwxyz")
        s = list(s)

        for i in range(len(s)):
            if s[i] == '?':
                for letter in letters:
                    if (i > 0 and s[i-1] == letter) or (i < len(s)-1 and s[i+1] == letter):
                        continue
                    s[i] = letter
                    break

        return "".join(s)
        
# @lc code=end

