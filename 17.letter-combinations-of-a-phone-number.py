#
# @lc app=leetcode id=17 lang=python3
#
# [17] Letter Combinations of a Phone Number
#

# @lc code=start
class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        letters = {
            "2": "abc",
            "3": "def",
            "4": "ghi",
            "5": "jkl",
            "6": "mno",
            "7": "pqrs",
            "8": "tuv",
            "9": "wxyz"
        } 

        if not digits:
            return []

        res = [""]

        # Pour chaque digit
        for d in digits:            
            tab = []
            # Pour chaque case du tableau
            for c in res:
                # On modifie la première, et on la duplique pour les autres lettres
                for letter in letters[d]:
                    tab.append(c + letter)
                res = tab
        return res
# @lc code=end