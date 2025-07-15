#
# @lc app=leetcode id=804 lang=python3
#
# [804] Unique Morse Code Words
#

# @lc code=start
class Solution:
    alphabet = {
        "a": ".-",
        "b": "-...",
        "c": "-.-.",
        "d": "-..",
        "e": ".",
        "f": "..-.",
        "g": "--.",
        "h": "....",
        "i": "..",
        "j": ".---",
        "k": "-.-",
        "l": ".-..",
        "m": "--",
        "n": "-.",
        "o": "---",
        "p": ".--.",
        "q": "--.-",
        "r": ".-.",
        "s": "...",
        "t": "-",
        "u": "..-",
        "v": "...-",
        "w": ".--",
        "x": "-..-",
        "y": "-.--",
        "z": "--.."
    }
    def wordToMorse(self, word):
        return ''.join([self.alphabet[l] for l in word])

    def uniqueMorseRepresentations(self, words: List[str]) -> int:
        transf = []
        for w in words:
            m = self.wordToMorse(w)
            if m not in transf:
                transf.append(m)
        return len(transf)
# @lc code=end

