class DoublyLinkedList {
    public val: string;
    public next: DoublyLinkedList;
    public prev: DoublyLinkedList;

    constructor(val: string, next: DoublyLinkedList = null, prev: DoublyLinkedList = null) {
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}

class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        let head = new DoublyLinkedList(tokens[0]);
        let curr = head;

        for (let i = 1; i < tokens.length; i++) {
            curr.next = new DoublyLinkedList(tokens[i], null, curr);
            curr = curr.next;
        }

        let ans = 0;
        while (head != null) {
            if ("+-*/".includes(head.val)) {
                let l = parseInt(head.prev.prev.val);
                let r = parseInt(head.prev.val);
                let res = 0;
                if (head.val === "+") {
                    res = l + r;
                } else if (head.val === "-") {
                    res = l - r;
                } else if (head.val === "*") {
                    res = l * r;
                } else {
                    res = Math.trunc(l / r);
                }

                head.val = res.toString();
                head.prev = head.prev.prev.prev;
                if (head.prev !== null) {
                    head.prev.next = head;
                }
            }
            ans = parseInt(head.val);
            head = head.next;
        }
        return ans;
    }
}
