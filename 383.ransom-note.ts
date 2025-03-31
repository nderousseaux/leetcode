/*
 * @lc app=leetcode id=383 lang=typescript
 *
 * [383] Ransom Note
 */

// @lc code=start
function canConstruct(ransomNote: string, magazine: string): boolean {
	for (const char of ransomNote) {
		if (!magazine.includes(char)) {
			return false;
		}
		magazine = magazine.replace(char, '');
	}
	return true;
};
// @lc code=end

