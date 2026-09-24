class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const count: Record<number, number> = {}
        for(const num of nums){
            count[num] = (count[num] || 0) + 1;
        }

        const arr: [number, number][] = Object.entries(count).map(([num, freq]) => [
            freq,
            parseInt(num)
        ]);
        arr.sort((a, b) => b[0] - a[0]);

        return arr.slice(0, k).map((pair) => pair[1]);
    }
}
