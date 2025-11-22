/*
 * @lc app=leetcode id=1704 lang=typescript
 *
 * [1704] Determine if String Halves Are Alike
 */

// @lc code=start
function nbVowels(s: string): number {
    return s.split("").filter((a) =>
        ["a","e","i","o","u"].includes(a.toLowerCase())
    ).length;
}

function halvesAreAlike(s: string): boolean {
    let a = s.substring(0,s.length/2)
    let b = s.substring(s.length/2, s.length)
    console.log(a)
    console.log(b)
    console.log(nbVowels(a))
    console.log(nbVowels(b))

    return nbVowels(a) == nbVowels(b)
};
// @lc code=end

