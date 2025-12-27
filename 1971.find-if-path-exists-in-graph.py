#
# @lc app=leetcode id=1971 lang=python3
#
# [1971] Find if Path Exists in Graph
#

# @lc code=start
class Solution:
    def validPath(self, n: int, edges: List[List[int]], source: int, 
    destination: int) -> bool:
        # Build adjacency list for faster lookup
        graph = [[] for _ in range(n)]
        for u, v in edges:
            graph[u].append(v)
            graph[v].append(u)
        
        # BFS
        visited = set([source])
        queue = [source]
        
        for node in queue:
            if node == destination:
                return True
            for neighbor in graph[node]:
                if neighbor not in visited:
                    visited.add(neighbor)
                    queue.append(neighbor)
        
        return False
        
# @lc code=end

