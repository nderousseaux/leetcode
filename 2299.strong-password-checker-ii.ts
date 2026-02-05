/*
 * @lc app=leetcode id=2299 lang=typescript
 *
 * [2299] Strong Password Checker II
 */

// @lc code=start
function strongPasswordCheckerII(password: string): boolean {
    let p: string[] = password.split("");

    if (p.length < 8) return false;

    if (!p.some(x => /[a-z]/.test(x))) return false;

    if (!p.some(x => /[A-Z]/.test(x))) return false;

    if (!p.some(x => /[0-9]/.test(x))) return false; 

    if (!p.some(x => "!@#$%^&*()-+".includes(x))) return false;

    for (let i = 0; i < p.length-1; i++)
        if (p[i] == p[i+1]) return false;

    return true;
    
};
// @lc code=end

