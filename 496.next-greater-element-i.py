#
# @lc app=leetcode id=496 lang=python3
#
# [496] Next Greater Element I
#

# @lc code=start
class Solution:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
        res = []
        for i in nums1:
            n = -1
            for j in nums2[nums2.index(i):]:
                if j > i:
                    n = j
                    break
            res.append(n)
        return res
                
# @lc code=end

