#
# @lc app=leetcode id=922 lang=python3
#
# [922] Sort Array By Parity II
#

# @lc code=start
class Solution:
    def sortArrayByParityII(self, nums: List[int]) -> List[int]:
        even = []
        odd = []

        for i in nums:
            if i % 2 == 0:
                odd.append(i)
            else:
                even.append(i)
        
        res = []
        for i in range(len(nums)):
            if i % 2 == 0:
                res.append(odd[0])
                del odd[0]
            else:
                res.append(even[0])
                del even[0]

        return res
# @lc code=end

