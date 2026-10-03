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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists: ListNode[]): ListNode {
        if (!lists || lists.length === 0) {
            return null;
        }
        return this.divide(lists, 0, lists.length - 1);
    }

    divide(lists: ListNode[], l: number, r: number): ListNode {
        if (l > r) {
            return null;
        }

        if (l === r) {
            return lists[l];
        }

        const mid = Math.floor(l + (r - l) / 2);
        const left = this.divide(lists, l, mid);
        const right = this.divide(lists, mid + 1, r);

        return this.conquer(left, right);
    }

    conquer(l1: ListNode, l2: ListNode): ListNode {
        const dummy = new ListNode(0);
        let cur = dummy;

        while (l1 && l2) {
            if (l1.val <= l2.val) {
                cur.next = l1;
                l1 = l1.next;
            } else {
                cur.next = l2;
                l2 = l2.next;
            }
            cur = cur.next;
        }

        cur.next = l1 ? l1 : l2;
        return dummy.next;
    }
}
