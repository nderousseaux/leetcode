#
# @lc app=leetcode id=40 lang=python3
#
# [40] Combination Sum II
#

# @lc code=start
class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        res = [[c] for c in candidates if c == target]
        res = list(map(list, {tuple(sorted(r)) for r in res}))
        combs = [[c] for c in candidates if c < target]
        
        while len(combs) > 0:
            tmp = []
            
            # For each combination not ended
            for comb in combs:
                
                # For each element we can append
                for e in [x for x in candidates if comb.count(x) < candidates.count(x)]:
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

