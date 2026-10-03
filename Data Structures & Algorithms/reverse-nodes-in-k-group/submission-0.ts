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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head: ListNode | null, k: number): ListNode {
        const dummy = new ListNode();
        let preGroup = head,
            nextGroup = head;
        let tail = dummy;

        while (nextGroup) {
            let i = 0;
            while (nextGroup && i++ < k) {
                nextGroup = nextGroup.next;
            }

            if (i < k) {
                tail.next = preGroup;
                break;
            }

            i = 0;
            while (i++ < k) {
                let next = tail.next;
                tail.next = preGroup;
                preGroup = preGroup.next;
                tail.next.next = next;
            }
            i = 0;
            while (i++ < k) {
                tail = tail.next;
            }
        }

        return dummy.next;
    }
}
