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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head: ListNode | null, n: number): ListNode {
        if (!head) return null;
        let first = head, secord = head, i:number, len=0;

        while(secord){
            secord = secord.next;
            len++;
        }

        if(n==len){
            return head.next;
        }

        i = len - n - 1;
        while(i>0){
            first = first.next;
            i--;
        }

        
        first.next = first.next.next;
    
        return head;
    }
}
