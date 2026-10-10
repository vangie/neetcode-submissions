class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums: number[], k: number): number {
        const q = new MinPriorityQueue();

        for (let n of nums) {
            q.enqueue(n);

            if (q.size() > k) {
                q.dequeue(n);
            }
        }

        return q.front();
    }
}
