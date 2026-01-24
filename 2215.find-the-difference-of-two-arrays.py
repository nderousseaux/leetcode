#
# @lc app=leetcode id=2215 lang=python3
#
# [2215] Find the Difference of Two Arrays
#

# @lc code=start
class Solution:
    def findDifference(self, nums1: List[int], nums2: List[int]) -> List[List[int]]:
        res1 = set([i for i in nums1 if i not in nums2])
        res2 = set([i for i in nums2 if i not in nums1])


        return [
            list(res1),
            list(res2)
        ]
        
# @lc code=end

