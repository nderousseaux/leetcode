/*
 * @lc app=leetcode id=1496 lang=typescript
 *
 * [1496] Path Crossing
 */

// @lc code=start
function isPathCrossing(path: string): boolean {
    let x = 0, y = 0;
    const visited = new Set<string>();
    visited.add('0,0');

    for (let i = 0; i < path.length; i++) {
        switch (path[i]) {
            case "N":
                y += 1;
                break;
            case "S":
                y -= 1;
                break;
            case "E":
                x += 1;
                break;
            case "W":
                x -= 1;
                break;
        }
        const pos = `${x},${y}`;
        if (visited.has(pos)) {
            return true;
        }
        visited.add(pos);
    }
    return false;

};
// @lc code=end

