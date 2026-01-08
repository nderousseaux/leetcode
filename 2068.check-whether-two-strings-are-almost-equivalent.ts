/*
 * @lc app=leetcode id=2068 lang=typescript
 *
 * [2068] Check Whether Two Strings are Almost Equivalent
 */

// @lc code=start
function checkAlmostEquivalent(word1: string, word2: string): boolean {
    let oc1: { [key: string]: number } = {};
    let oc2: { [key: string]: number } = {};

    // Populate
    for (let c of word1) {
        if (!(c in oc1))
            oc1[c] = 0;
        oc1[c]++;
    }
    for (let c of word2) {
       if (!(c in oc2))
            oc2[c] = 0;
        oc2[c]++; 
    }

    // Test occurence
    for(let c of new Set([...Object.keys(oc1), ...Object.keys(oc2)])){
        const count1 = oc1[c] || 0;
        const count2 = oc2[c] || 0;
        if(Math.abs(count1 - count2) > 3) return false;
    }
    
    return true;    
};
// @lc code=end

