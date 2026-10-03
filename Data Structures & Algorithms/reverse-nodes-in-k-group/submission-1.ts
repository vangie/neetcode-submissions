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
        let cur = head;
        let group = 0;
        while (cur && group < k) {
            cur = cur.next;
            group++; 
        }

        if (group === k) {
            cur = this.reverseKGroup(cur, k);
            while (group-- > 0) {
                let tmp = head.next;
                head.next = cur;
                cur = head;
                head = tmp;
            }
            head = cur;
        }

        return head;
    }
}
