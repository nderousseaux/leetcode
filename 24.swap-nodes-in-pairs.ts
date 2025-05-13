/*
 * @lc app=leetcode id=24 lang=typescript
 *
 * [24] Swap Nodes in Pairs
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

function swapPairs(head: ListNode | null): ListNode | null {
	if (!head || !head.next) return head

	// get the next node
	let tmp: ListNode = head.next
	head.next = swapPairs(tmp.next) // Swap the rest of the list
	tmp.next = head

	return tmp
};
// @lc code=end

