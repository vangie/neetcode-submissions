class KthLargest {
    private minHeap: typeof MinPriorityQueue;

    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(
        private k: number,
        nums: number[],
    ) {
        this.minHeap = new MinPriorityQueue();

        for (const num of nums) {
            this.minHeap.enqueue(num);
        }

        while (this.minHeap.size() > this.k) {
            this.minHeap.dequeue();
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val: number): number {
        this.minHeap.enqueue(val);
        if (this.minHeap.size() > this.k) {
            this.minHeap.dequeue();
        }
        return this.minHeap.front();
    }
}
