/*
 * @lc app=leetcode id=203 lang=typescript
 *
 * [203] Remove Linked List Elements
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeElements(head: ListNode | null, val: number): ListNode | null {
	let dummy = new ListNode(0);
	dummy.next = head;
	let current = dummy;
	while (current.next) {
		if (current.next.val === val) {
			current.next = current.next.next;
		} else {
			current = current.next;
		}
	}
	return dummy.next;
    
};
// @lc code=end

