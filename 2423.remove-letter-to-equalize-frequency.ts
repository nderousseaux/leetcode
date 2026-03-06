/*
 * @lc app=leetcode id=2423 lang=typescript
 *
 * [2423] Remove Letter To Equalize Frequency
 */

// @lc code=start
function equalFrequency(word: string): boolean {
  for (let i = 0; i < word.length; i++) {
    const freq = new Map<string, number>();
    for (let j = 0; j < word.length; j++) {
      if (j == i) continue;
      freq.set(word[j], (freq.get(word[j]) || 0) + 1);
    }

    if ((new Set(freq.values())).size == 1) {
      return true;
    }
  }
  return false;
};
// @lc code=end
