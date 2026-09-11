/*
 * @lc app=leetcode id=3136 lang=typescript
 *
 * [3136] Valid Word
 */

// @lc code=start
function isValid(word: string): boolean {

  function isDigit(char: string): boolean {
    let c: number = char.charCodeAt(0)
    return (c >= 48 && c <= 57);
  }

  function isLetter(char: string): boolean {
    let c: number = char.toLowerCase().charCodeAt(0)
    return (c >= 97 && c <= 122);
  }

  function isVowel(char: string): boolean {
    return ["a", "e", "i", "o", "u"].indexOf(char.toLowerCase()) > -1;
  }

  function isConsonant(char: string): boolean {
    return isLetter(char) && !isVowel(char);
  }

  if (word.length < 3) return false;

  let vowel: boolean = false;
  let conso: boolean = false;

  for (let c of word) {
    if (!isDigit(c) && !isLetter(c)) return false;
    if (isVowel(c)) vowel = true;
    if (isConsonant(c)) conso = true;
  }

  return vowel && conso;
};
// @lc code=end
