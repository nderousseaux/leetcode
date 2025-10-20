#
# @lc app=leetcode id=1507 lang=python3
#
# [1507] Reformat Date
#

# @lc code=start
class Solution:
    def reformatDate(self, date: str) -> str:
        months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        d = date.split(" ")
        m = months.index(d[1]) + 1
        m = f"0{m}" if m < 10 else f"{m}"
        day = d[0][:-2]
        day = f"0{day}" if len(day) < 2 else f"{day}" 
        return f"{d[2]}-{m}-{day}"
        
# @lc code=end

