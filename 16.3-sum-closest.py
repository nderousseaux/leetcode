#
# @lc app=leetcode id=16 lang=python3
#
# [16] 3Sum Closest
#

# @lc code=start
class Solution:
    def threeSumClosest(self, nums: List[int], target: int) -> int:
        nums.sort()
        res = nums[0] +  nums[1] +  nums[2]
        

        for i in range(len(nums)-2):
            x = i +1;
            y = len(nums) - 1

            while (x < y):
                s = nums[i] + nums[x] + nums[y]

                # Si on est plus proche qu'avant
                if abs(s - target) < abs(res - target):
                    res = s
                elif target > s: #si on est trop au dessus
                    x+=1;
                elif target < s: #si on est trop en dessous
                    y-=1
                else: # Si c'est parfaitement égal
                    return s;
        return res

# @lc code=end

