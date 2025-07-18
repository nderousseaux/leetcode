#
# @lc app=leetcode id=824 lang=python3
#
# [824] Goat Latin
#

# @lc code=start
class Solution:
    def toGoatLatin(self, sentence: str) -> str:
        res = []
        i = 1
        for word in sentence.split(" "):
            # Begin consonant -> first letter to the end
            if word[0].lower() not in ["a", "e", "i", "o", "u"]:
                word = word[1:] + word[0]
            word += "ma"
            word += "".join(["a" for _  in range(i)])

            i += 1
            res.append(word)

        
        return " ".join(res)
# @lc code=end

