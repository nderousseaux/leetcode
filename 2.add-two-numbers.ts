/*
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
	let res = new ListNode(0)
	let tmp = res;
	let carry = 0;

	while (l1 || l2 || carry !== 0) {
		let a = l1 ? l1.val: 0;
		let b = l2 ? l2.val: 0;

		let sum = a+b+carry
		carry = Math.floor(sum / 10);
		tmp.next = new ListNode(sum % 10)
		tmp = tmp.next 


		// Next value
		if(l1) l1 = l1.next
		if(l2) l2 = l2.next
	}

	return res.next
};
// @lc code=end

