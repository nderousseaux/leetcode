#
# @lc app=leetcode id=2899 lang=python3
#
# [2899] Last Visited Integers
#

# @lc code=start
class Solution:
    def lastVisitedIntegers(self, nums: List[int]) -> List[int]:
        seen = []
        ans = []
        k = 0
        for n in nums:
            if n >= 0:
                seen.insert(0, n)
                k = 0
            else:
                k += 1
                if k <= len(seen):
                    ans.append(seen[k-1])
                else:
                    ans.append(-1)
        return ans



# @lc code=end
