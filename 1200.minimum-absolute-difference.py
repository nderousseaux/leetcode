#
# @lc app=leetcode id=1200 lang=python3
#
# [1200] Minimum Absolute Difference
#

# @lc code=start
class Solution:
    def minimumAbsDifference(self, arr: List[int]) -> List[List[int]]:
        # First: order arr
        arr.sort()

        res = [[arr[0], arr[1]]]
        for i in range(1, len(arr) - 1):
            currentDiff = arr[i+1] - arr[i]
            minDiff = res[0][1] - res[0][0]
            
            # if currentDiff is the new lower
            if currentDiff < minDiff:
                res = [[arr[i], arr[i+1]]]
            # If currentDiff is equal to lower
            elif currentDiff == minDiff:
                res.append([arr[i], arr[i+1]])

        return res
# @lc code=end
