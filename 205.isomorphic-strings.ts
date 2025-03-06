/*
 * @lc app=leetcode id=205 lang=typescript
 *
 * [205] Isomorphic Strings
 */

// @lc code=start
function isIsomorphic(s: string, t: string): boolean {
	if (s.length !== t.length) return false;
	let map1 = new Map<string, string>();
	let map2 = new Map<string, string>();
	for (let i = 0; i < s.length; i++) {
		let char1 = s[i];
		let char2 = t[i];
		if (map1.has(char1) && map1.get(char1) !== char2) return false;
		if (map2.has(char2) && map2.get(char2) !== char1) return false;
		map1.set(char1, char2);
		map2.set(char2, char1);
	}
	return true;
};
// @lc code=end

