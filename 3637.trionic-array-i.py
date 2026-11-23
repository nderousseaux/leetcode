#
# @lc app=leetcode id=3637 lang=python3
#
# [3637] Trionic Array I
#

# @lc code=start
class Solution:
    def isTrionic(self, nums: List[int]) -> bool:
        def isIncreasing(nums: List[int]) -> bool:
            if len(nums) < 2:
                return False
            for i in range(1,len(nums)):
                if not nums[i-1] < nums[i]:
                    return False
            return True
        def isDecreasing(nums: List[int]) -> bool:
            for i in range(1,len(nums)):
                if not nums[i-1] > nums[i]:
                    return False
            return True

        for p in range(1, len(nums)):
            for q in range(p+1, len(nums)):
                if (
                    isIncreasing(nums[:p+1]) and
                    isDecreasing(nums[p:q+1]) and
                    isIncreasing(nums[q:])
                ):
                    print(p)
                    print(q)
                    print(nums[:p+1])
                    print(nums[p:q+1])
                    print(nums[q:])
                    # print(q)
                    return True
        return False
# @lc code=end
