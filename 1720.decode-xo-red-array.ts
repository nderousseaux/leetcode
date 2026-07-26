/*
 * @lc app=leetcode id=1720 lang=typescript
 *
 * [1720] Decode XORed Array
 */

// @lc code=start
function decode(encoded: number[], first: number): number[] {
    let res: number[] = [first];

    for (let i = 0; i < encoded.length; i++)
        res.push(res[i] ^ encoded[i]);

    return res;
};
// @lc code=end

