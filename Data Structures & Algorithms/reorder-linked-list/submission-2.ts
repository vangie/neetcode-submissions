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
        head = this.rec(head, head.next);
    }

    rec(root: ListNode | null, cur: ListNode | null): ListNode | null {
        if(cur === null) {
            return root;
        }

        root = this.rec(root, cur.next);
        if(root === null){
            return null;
        }

        let tmp = null;
        if(root === cur || root.next === cur) {
            cur.next = null;
        } else {
            tmp = root.next;
            root.next = cur;
            cur.next = tmp;
        }

        return tmp;
    }
}
