/*
 * @lc app=leetcode id=3248 lang=typescript
 *
 * [3248] Snake in Matrix
 */

// @lc code=start
function finalPositionOfSnake(n: number, commands: string[]): number {
  let pos: number = 0;
  for (let command of commands) {
    switch (command) {
      case "UP":
        pos -= n;
        break;
      case "DOWN":
        pos += n;
        break;
      case "RIGHT":
        pos += 1;
        break;
      case "LEFT":
        pos -= 1;
        break;
      default:
        throw new Error("Unknown instruction");
    }
  }

  return pos;
};
// @lc code=end
