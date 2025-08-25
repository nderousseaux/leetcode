#
# @lc app=leetcode id=989 lang=python3
#
# [989] Add to Array-Form of Integer
#

# @lc code=start
class Solution:
    def addToArrayForm(self, num: List[int], k: int) -> List[int]:
        i = len(num) - 1
        while k > 0 or i >= 0:
            if i >= 0:
                k += num[i]
                num[i] = k % 10
                k //= 10
                i -= 1
            else:
                num.insert(0, k % 10)
                k //= 10
        return num
        
# @lc code=end

