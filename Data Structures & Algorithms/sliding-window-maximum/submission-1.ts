class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums: number[], k: number): number[] {
        const heap = new MaxPriorityQueue((x) => x[0]);
        const output = [];
        const n = nums.length;

        for (let i = 0; i < n; i++) {
            heap.enqueue([nums[i], i]);

            if (i >= k - 1) {
                while (heap.front()[1] <= i - k) {
                    heap.dequeue();
                }
                output.push(heap.front()[0]);
            }
        }

        return output;
    }
}
