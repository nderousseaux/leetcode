/*
 * @lc app=leetcode id=2490 lang=typescript
 *
 * [2490] Circular Sentence
 */

// @lc code=start
function isCircularSentence(sentence: string): boolean {
  let words: string[] = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (
      words[i].charAt(words[i].length - 1) !=
      words[(i + 1) % words.length].charAt(0)
    )
      return false;
  }

  return true;

};
// @lc code=end
