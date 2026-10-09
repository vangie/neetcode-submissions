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
        while (maxHeap.size() > 1) {
            a = maxHeap.dequeue();
            b = maxHeap.dequeue();
            if (a !== b) maxHeap.enqueue(a - b);
        }

        return maxHeap.size() === 1 ? maxHeap.dequeue() : 0;
    }
}
