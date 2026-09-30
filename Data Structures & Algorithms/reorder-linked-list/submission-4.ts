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
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head: ListNode | null): void {
        if (head === null) return;
        this.rec(head, head.next);
    }

    rec(front: ListNode | null, back: ListNode | null): ListNode | null {
        if (back === null) {
            return front;
        }

        front = this.rec(front, back.next);
        if (front === null) {
            return null;
        }

        let nextFront: ListNode | null = null;
        if (front === back || front.next === back) {
            back.next = null;
        } else {
            nextFront = front.next;
            front.next = back;
            back.next = nextFront;
        }

        return nextFront;
    }
}