#
# @lc app=leetcode id=2409 lang=python3
#
# [2409] Count Days Spent Together
#

# @lc code=start
DAYS_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

class Solution:
    def countDaysTogether(self, arriveAlice: str, leaveAlice: str, arriveBob: str, leaveBob: str) -> int:
        # Convert str to index of day
        def toDay(date: str)-> int:
            nMonth = int(date[0:2])-1
            nDate = int(date[3:5])

            return sum(DAYS_MONTH[:nMonth]) + nDate
        
        arriveAlice = toDay(arriveAlice)
        leaveAlice = toDay(leaveAlice)
        arriveBob = toDay(arriveBob)
        leaveBob = toDay(leaveBob)

        return max(
            min(leaveAlice, leaveBob) - max(arriveBob, arriveAlice) + 1,
            0
        ) 


        
# @lc code=end

