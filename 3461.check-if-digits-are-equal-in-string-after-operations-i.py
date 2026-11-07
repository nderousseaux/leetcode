#
# @lc app=leetcode id=3461 lang=python3
#
# [3461] Check If Digits Are Equal in String After Operations I
#

# @lc code=start
class Solution:
    def hasSameDigits(self, s: str) -> bool:
        while len(s) != 2:
            new: List[str] = []
            for i in range(len(s) - 1):
                new.append(str((int(s[i]) + int(s[i+1])) % 10))
            s = "".join(new)
        return len(set(s)) == 1

# @lc code=end
