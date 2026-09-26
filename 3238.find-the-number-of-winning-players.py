#
# @lc app=leetcode id=3238 lang=python3
#
# [3238] Find the Number of Winning Players
#

# @lc code=start
class Solution:
    def winningPlayerCount(self, n: int, pick: List[List[int]]) -> int:
        # Get dict[playerX] = {colorY: number of balls of colorY}
        m: Dict[int, Dict[int, int]] = {}
        for player, color in pick:
            # if player wasn't see, add it
            if m.get(player) is None:
                m[player] = {}

            m[player][color] = m[player].get(color, 0) + 1

        # get number of max of this color > idxPlayer
        return len(
            [
                1 for player, dictColor in m.items()
                if max(dictColor.values()) > player
            ]
        )


# @lc code=end
