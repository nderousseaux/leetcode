#
# @lc app=leetcode id=3602 lang=python3
#
# [3602] Hexadecimal and Hexatrigesimal Conversion
#

# @lc code=start
class Solution:
    def concatHex36(self, n: int) -> str:
        def digit(v: int) -> str:
            return str(v) if v <= 9 else chr(65+v-10)

        def h(v: int, base:int) -> str:
            res = []
            while v > 0:
                res.insert(0, v%base)
                v //= base
            return "".join([digit(e) for e in res])

        return h(n**2, 16) + h(n**3, 36)
# @lc code=end
