#
# @lc app=leetcode id=2956 lang=python3
#
# [2956] Find Common Elements Between Two Arrays
#

# @lc code=start
class Solution:
    def findIntersectionValues(self, nums1: List[int], nums2: List[int]) -> List[int]:
        return [
            len([i for i in range(len(nums1)) if nums1[i] in nums2]),
            len([i for i in range(len(nums2)) if nums2[i] in nums1])
        ]
# @lc code=end
