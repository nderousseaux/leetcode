/*
 * @lc app=leetcode id=914 lang=typescript
 *
 * [914] X of a Kind in a Deck of Cards
 */

// @lc code=start
function hasGroupsSizeX(deck: number[]): boolean {
	if (deck.length < 2) return false;
	
	// Count frequency of each card
	const count = new Map<number, number>();
	for (const card of deck) {
		count.set(card, (count.get(card) || 0) + 1);
	}
	
	// Find GCD of all frequencies
	const frequencies = Array.from(count.values());
	let gcd = frequencies[0];
	
	for (let i = 1; i < frequencies.length; i++) {
		gcd = getGCD(gcd, frequencies[i]);
		if (gcd < 2) return false;
	}
	
	return gcd >= 2;
	
	function getGCD(a: number, b: number): number {
		while (b !== 0) {
			const temp = b;
			b = a % b;
			a = temp;
		}
		return a;
	}
};
// @lc code=end

