#
# @lc app=leetcode id=1114 lang=python3
#
# [1114] Print in Order
#

# @lc code=start

import threading

class Foo:
    def __init__(self):
        self.l1 = threading.Lock()
        self.l2 = threading.Lock()
        self.l1.acquire()
        self.l2.acquire()
        pass


    def first(self, printFirst: 'Callable[[], None]') -> None:
        
        # printFirst() outputs "first". Do not change or remove this line.
        printFirst()

        self.l1.release()


    def second(self, printSecond: 'Callable[[], None]') -> None:
        self.l1.acquire() # Wait for unlock to pass, then lock

        # printSecond() outputs "second". Do not change or remove this line.
        printSecond()

        self.l2.release()


    def third(self, printThird: 'Callable[[], None]') -> None:
        self.l2.acquire()
        
        # printThird() outputs "third". Do not change or remove this line.
        printThird()
# @lc code=end

