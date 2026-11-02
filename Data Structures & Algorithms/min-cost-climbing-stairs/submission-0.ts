class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost: number[]): number {
        let zero = 0,
            one = 0;
        const n = cost.length;

        for (let i = 0; i < n - 1; i++) {
            [one, zero] = [Math.min(one + cost[i + 1], zero + cost[i]), one];
        }

        return one;
    }
}
