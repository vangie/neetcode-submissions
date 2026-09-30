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
        if (!head || !head.next) return;

        // 1. 找中点，slow 停在前半尾
        let slow: ListNode = head;
        let fast: ListNode | null = head;
        while (fast.next && fast.next.next) {
            slow = slow.next!;
            fast = fast.next.next;
        }

        // 2. 切断并反转后半
        let second: ListNode | null = slow.next;
        slow.next = null;

        let prev: ListNode | null = null;
        while (second) {
            const nxt = second.next;
            second.next = prev;
            prev = second;
            second = nxt;
        }

        // 3. 交叉合并（head 不用换）
        let first: ListNode | null = head;
        second = prev;
        while (second) {
            const n1 = first!.next;
            const n2 = second.next;
            first!.next = second;
            second.next = n1;
            first = n1;
            second = n2;
        }
    }
}
