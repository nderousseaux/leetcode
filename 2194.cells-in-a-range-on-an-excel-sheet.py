#
# @lc app=leetcode id=2194 lang=python3
#
# [2194] Cells in a Range on an Excel Sheet
#

# @lc code=start
class Solution:
    def cellsInRange(self, s: str) -> List[str]:
        
        [start,end] = s.split(":")
        start = [ord(start[0])-65, int(start[1])]
        end = [ord(end[0])-65, int(end[1])]

        curr = start.copy()
        res: List[str] = [curr.copy()]

        while curr != end:
            # Next line
            curr[1] += 1

            # End of the col
            if curr[1] > end[1]:
                curr[0] += 1
                curr[1] = start[1] 

            res.append(curr.copy())

        return [chr(v[0]+65)+str(v[1]) for v in res]
        
# @lc code=end

