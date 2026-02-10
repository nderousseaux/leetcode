#
# @lc app=leetcode id=2325 lang=python3
#
# [2325] Decode the Message
#

# @lc code=start
class Solution:
    def decodeMessage(self, key: str, message: str) -> str:
        key = [i for i in list(dict.fromkeys(key)) if i != " "]

        return "".join(
            [chr(key.index(c) + 97) if c != " " else c for c in message]
        )
        
# @lc code=end

