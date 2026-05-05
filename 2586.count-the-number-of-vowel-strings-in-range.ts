/*
 * @lc app=leetcode id=2586 lang=typescript
 *
 * [2586] Count the Number of Vowel Strings in Range
 */

// @lc code=start
function vowelStrings(words: string[], left: number, right: number): number {
  function isVowelString(word: string): boolean {
    let vowel: string[] = ['a', 'e', 'i', 'o', 'u'];
    console.log(word[0], word.length - 1)
    return (
      vowel.filter(a => a == word[0]).length > 0 &&
      vowel.filter(a => a == word[word.length - 1]).length > 0
    )
  }

  let res: number = 0;
  for (let i = left; i <= right; i++) {
    res += isVowelString(words[i]) ? 1 : 0;
  }
  return res;
};
// @lc code=end
