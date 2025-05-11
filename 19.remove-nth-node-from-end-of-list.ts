/*
 * @lc app=leetcode id=19 lang=typescript
 *
 * [19] Remove Nth Node From End of List
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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
	let dummy = new ListNode(0, head);
	let first: ListNode | null = dummy;
	let second: ListNode | null = dummy;

	// Move first pointer so that the gap between first and second is n + 1
	for (let i = 0; i <= n; i++) {
		if (first) first = first.next;
	}

	// Move both pointers until first reaches the end
	while (first) {
		first = first.next;
		second = second!.next;
	}

	// Remove the nth node from the end
	if (second && second.next) {
		second.next = second.next.next;
	}

	return dummy.next;
    
};
// @lc code=end

