#
# @lc app=leetcode id=83 lang=python3
#
# [83] Remove Duplicates from Sorted List
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if head is None:
            return head
        # If the next items is the same as the current item, then skip the next item
        if head.next is not None and head.val == head.next.val:
            head.next = head.next.next
            self.deleteDuplicates(head)
        
        # If the next items is not the same as the current item, then move to the next item
        else:
            self.deleteDuplicates(head.next)
        return head

        
        
# @lc code=end

