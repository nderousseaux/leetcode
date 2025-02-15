#
# @lc app=leetcode id=67 lang=python3
#
# [67] Add Binary
#

# @lc code=start
def replace_at_index(s, index, replacement):
    res = s[:index] + replacement + s[index + 1:]
    print(f"s = {s}, index = {index}, replacement = {replacement}, res = {res}")
    return res


class Solution:
    def addBinary(self, a: str, b: str) -> str:
        # All should be an array of int
        res = []
        a = [int(i) for i in list(a)]
        b = [int(i) for i in list(b)]

        # Get the length of the longest array (+1 for the carry)
        n = max(len(a), len(b)) + 1

        # Fill the res, a and b with 0s to make them the same length
        res = [0] * n
        a = [0] * (n - len(a)) + a
        b = [0] * (n - len(b)) + b

        # We will iterate backwards
        for i in range(len(a)):
            # Sum of all current digits
            sum = a[~i] + b[~i] + res[~i]

            # If the sum is even, we will add 0 to the result, otherwise we will add 1
            res[~i] = sum % 2

            # If the sum is greater than 1, we will carry over the 1 to the next digit
            if sum > 1:
                res[~(i + 1)] = 1

        # If the first digit is 0, we will remove it
        if res[0] == 0:
            res = res[1:]

        return "".join([str(i) for i in res])

# @lc code=end

