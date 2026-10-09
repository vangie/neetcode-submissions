class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones: number[]): number {
        let maxHeap = new MaxPriorityQueue();
        for (const s of stones) {
            maxHeap.enqueue(s);
        }
        let a: number, b: number;
        while (maxHeap.size() != 0) {
            a = maxHeap.dequeue();
            if (maxHeap.size() == 0) {
                return a;
            }
            b = maxHeap.dequeue();
            if (a < b) [a, b] = [b, a];
            maxHeap.enqueue(a - b);
        }
    }
}
