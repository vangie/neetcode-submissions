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
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        let prev: ListNode | null = null;
        let cur = head;
        while (cur !== null) {
            const next = cur.next;
            cur.next = prev;   // 第一个节点会把 next 改成 null
            prev = cur;
            cur = next;
        }
        return prev;
    }
}
