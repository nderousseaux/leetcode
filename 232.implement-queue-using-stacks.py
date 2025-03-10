#
# @lc app=leetcode id=232 lang=python3
#
# [232] Implement Queue using Stacks
#

# @lc code=start
class Stack:
    def __init__(self):
        self.stack = []
    
    def push(self, x):
        self.stack.append(x)
    
    def pop(self):
        if self.stack:
            return self.stack.pop()
    
    def peek(self):
        if self.stack:
            return self.stack[-1]
    
    def empty(self):
        return len(self.stack) == 0

class MyQueue:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.stack1 = Stack()
        self.stack2 = Stack()
        

    def push(self, x: int) -> None:
        self.stack1.push(x)
        

    def pop(self) -> int:
        while not self.stack1.empty():
            self.stack2.push(self.stack1.pop())
        res = self.stack2.pop()
        while not self.stack2.empty():
            self.stack1.push(self.stack2.pop())
        return res
        

    def peek(self) -> int:
        while not self.stack1.empty():
            self.stack2.push(self.stack1.pop())
        res = self.stack2.peek()
        while not self.stack2.empty():
            self.stack1.push(self.stack2.pop())
        return res
        

    def empty(self) -> bool:
        return self.stack1.empty()
        


# Your MyQueue object will be instantiated and called as such:
# obj = MyQueue()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.peek()
# param_4 = obj.empty()
# @lc code=end

