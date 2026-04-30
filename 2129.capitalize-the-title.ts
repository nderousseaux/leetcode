/*
 * @lc app=leetcode id=2129 lang=typescript
 *
 * [2129] Capitalize the Title
 */

// @lc code=start
function capitalizeTitle(title: string): string {
    let res: string[] = [];

    for(let w of title.split(" ")) {
        if (w.length <= 2) res.push(w.toLowerCase());
        else res.push(w[0].toUpperCase() + w.slice(1).toLowerCase());
    }
    return res.join(" ");
};
// @lc code=end

