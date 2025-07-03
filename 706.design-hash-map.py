#
# @lc app=leetcode id=706 lang=python3
#
# [706] Design HashMap
#

# @lc code=start
class MyHashMap:
    
    def __init__(self):
        self.hash = []
        

    def put(self, key: int, value: int) -> None:
        for i in range(len(self.hash)):
            if self.hash[i][0] == key:
                self.hash[i][1] = value
                return
        self.hash.append([key, value])
        

    def get(self, key: int) -> int:
        for i in range(len(self.hash)):
            if self.hash[i][0] == key:
                return self.hash[i][1]
        return -1

    def remove(self, key: int) -> None:
        for i in range(len(self.hash)):
            if self.hash[i][0] == key:
                del self.hash[i]
                return

        


# Your MyHashMap object will be instantiated and called as such:
# obj = MyHashMap()
# obj.put(key,value)
# param_2 = obj.get(key)
# obj.remove(key)
# @lc code=end

