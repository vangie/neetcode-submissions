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
    add(l1: ListNode | null, l2: ListNode | null, carry: number): ListNode {
        if (l1 === null && l2 === null && carry == 0) {
            return null;
        }

        const node = new ListNode(0);
        const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        node.val = sum % 10;
        node.next = this.add(l1 ? l1.next : null, l2 ? l2.next : null, Math.floor(sum / 10));
        return node;
    }

    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode {
        return this.add(l1, l2, 0);
    }
}
