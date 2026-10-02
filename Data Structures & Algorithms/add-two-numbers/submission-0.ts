/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode {
        let carry = 0;
        const dummy = new ListNode(0);
        let cur = dummy;

        while (l1 !== null || l2 !== null || carry !== 0) {
            const sum =
                (l1 ? l1.val : 0) +
                (l2 ? l2.val : 0) +
                carry;

            carry = Math.floor(sum / 10);

            cur.next = new ListNode(sum % 10);
            cur = cur.next;

            l1 = l1 ? l1.next : null;
            l2 = l2 ? l2.next : null;
        }

        return dummy.next;
    }
}
