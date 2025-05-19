#
# @lc app=leetcode id=34 lang=python3
#
# [34] Find First and Last Position of Element in Sorted Array
#

# @lc code=start
class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        def search(x):
            down, up = 0, len(nums)

            while down < up:
                mid = (down + up) // 2
                if nums[mid] < x:
                    down = mid+1
                else:
                    up = mid
            return down


        down = search(target)
        up = search(target+1)-1

        if down <= up:
            return[down, up]
        return [-1, -1] 
# @lc code=end

