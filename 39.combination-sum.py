#
# @lc app=leetcode id=39 lang=python3
#
# [39] Combination Sum
#

# @lc code=start
# TODO: doublons ! [2,3] == [3,2]

class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:

        
        res = [[c] for c in candidates if c == target]
        combs = [[c] for c in candidates if c < target]
        
        while len(combs) > 0:
            tmp = []
            
            # For each combination not ended
            for comb in combs:
                
                # For each element we can append
                for e in candidates:
                    new_comb = sorted(comb + [e])

                    # If his sum is still lower than target, we keep it for the next loop
                    if sum(new_comb) < target and new_comb not in tmp:
                        tmp.append(new_comb) 

                    # If his is sum is the target, we add it to the res
                    if sum(new_comb) == target and new_comb not in res:
                        res.append(new_comb)

            combs = tmp

        return res
# @lc code=end

