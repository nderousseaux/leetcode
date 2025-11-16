/*
 * @lc app=leetcode id=1678 lang=typescript
 *
 * [1678] Goal Parser Interpretation
 */

// @lc code=start
function interpret(command: string): string {
    let p: number = 0;
    let res: string = "";
    while (p < command.length) {
        // If G
        if (command[p] == 'G') {
            res = res.concat('G');
            p++;
        }
        // If ()
        else if (command[p] == '(' && command[p+1] == ')') {
            res = res.concat("o");
            p += 2;
        }
        // If (al)
        else if (command[p] == '(' && command[p+1] == 'a') {
            res = res.concat('al');
            p += 4;
        }
    }

    return res;
};
// @lc code=end

