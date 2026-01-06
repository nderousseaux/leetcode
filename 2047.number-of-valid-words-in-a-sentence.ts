/*
 * @lc app=leetcode id=2047 lang=typescript
 *
 * [2047] Number of Valid Words in a Sentence
 */

// @lc code=start
function countValidWords(sentence: string): number {
    function isValid(w: string): boolean {
        let firstDash = true;
        for(let i = 0; i < w.length; i++) {
            let c: string = w[i];
            // Test if no digit
            if( c>= '0' && c <= '9')
                return false;

            // Test if AT MOST one - (and surrunded by lowercase char)
            if(c == "-") {
                if(
                    i > 0 && 
                    i < w.length -1 && 
                    !["!", ".", ","].includes(w[i+1])
                ) {
                    // The first ?
                    if(firstDash)
                        firstDash = false;
                    else
                        return false
                }
                else {
                    return false;
                }
            }

            // No punctuation mark, except at the end
            if(["!", ".", ","].includes(c)){
                if (i != w.length - 1)
                    return false;
            }
        }
        return true
    }

    let res = 0;
    sentence = sentence.replace(/\s+/g, ' ').trim()
    for(let w of sentence.split(" ")){
        res += isValid(w) ? 1 : 0;
    }
    return res;
};
// @lc code=end

