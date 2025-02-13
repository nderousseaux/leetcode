/*
 * @lc app=leetcode id=21 lang=typescript
 *
 * [21] Merge Two Sorted Lists
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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
	const res: ListNode = new ListNode();
    let tail = res;
	// While both lists are not empty
	while (list1 && list2) {
		// We add the smallest value to the result
		if (list1.val < list2.val) {
			tail.next = list1;
			list1 = list1.next;
		} else {
			tail.next = list2
			list2 = list2.next;
		}
        tail = tail.next
	}

	// If one of the lists is empty, we add the other list to the result
    tail.next = list1 || list2

	return res.next;
};
// @lc code=end

