#
# @lc app=leetcode id=1299 lang=python3
#
# [1299] Replace Elements with Greatest Element on Right Side
#

# @lc code=start
class Solution:
    def replaceElements(self, arr: List[int]) -> List[int]:
        n = len(arr)
        result = [-1] * n
        max_right = -1
        
        for i in range(n - 1, -1, -1):
            result[i] = max_right
            max_right = max(max_right, arr[i])
        
        return result
        
# @lc code=end

