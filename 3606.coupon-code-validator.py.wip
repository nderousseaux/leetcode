#
# @lc app=leetcode id=3606 lang=python3
#
# [3606] Coupon Code Validator
#

# @lc code=start
import re
from operator import itemgetter
class Solution:
    def validateCoupons(self, code: List[str], businessLine: List[str], isActive: List[bool]) -> List[str]:
        res: List[List[str]] = []
        pattern = re.compile("[A-Za-z0-9_]+")
        for idx, c in enumerate(code):
            if (
                pattern.fullmatch(c) and
                businessLine[idx] in ["electronics", "grocery", "pharmacy", "restaurant"] and
                isActive[idx]
            ):
                res.append([businessLine[idx], c])
        res = sorted(res, key=itemgetter(0,1))
        return [r[1] for r in res]
# @lc code=end
