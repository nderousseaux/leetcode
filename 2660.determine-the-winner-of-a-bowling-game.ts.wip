/*
 * @lc app=leetcode id=2660 lang=typescript
 *
 * [2660] Determine the Winner of a Bowling Game
 */

// @lc code=start
function isWinner(player1: number[], player2: number[]): number {

  function score(player: number[]): number {
    let res: number = 0;
    let lastTen: number = Infinity;
    for (let i = 0; i < player.length; i++) {

      res += player[i];
      if (lastTen <= 2)
        res += player[i];

      if (player[i] == 10)
        lastTen = 0;

      lastTen++;
    }
    return res;
  }


  if (score(player1) > score(player2))
    return 1;
  else if (score(player1) < score(player2))
    return 2;
  else
    return 0;
};
// @lc code=end
