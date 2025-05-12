/*
 * @lc app=leetcode id=520 lang=typescript
 *
 * [520] Detect Capital
 */

// @lc code=start
function detectCapitalUse(word: string): boolean {
	function capitalize(str: string = ""): string {
		return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
	}
	
  return (
		word.toUpperCase() == word ||
		capitalize(word) == word ||
		word.toLowerCase() == word
	 )
};
// @lc code=end

