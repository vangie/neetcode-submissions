// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head: Node | null): Node {
        const oldToCopy = new Map();
        oldToCopy.set(null, null);

        let cur = head;
        while (cur !== null) {
            if (!oldToCopy.has(cur)) {
                oldToCopy.set(cur, new Node(0));
            }
            oldToCopy.get(cur).val = cur.val;
            if (!oldToCopy.has(cur.next)) {
                oldToCopy.set(cur.next, new Node(0));
            }
            oldToCopy.get(cur).next = oldToCopy.get(cur.next);
            if (!oldToCopy.has(cur.random)) {
                oldToCopy.set(cur.random, new Node(0));
            }
            oldToCopy.get(cur).random = oldToCopy.get(cur.random);
            cur = cur.next;
        }
        return oldToCopy.get(head);
    }
}
