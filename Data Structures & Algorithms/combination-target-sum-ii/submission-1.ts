class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates: number[], target: number): number[][] {
        const res = [];
        const count = new Map();
        const A = [];

        for (const num of candidates) {
            if (!count.has(num)) {
                A.push(num);
            }
            count.set(num, (count.get(num) ?? 0) + 1);
        }

        const backtrack = (nums: number[], target: number, cur: number[], i: number) => {
            if (target === 0) {
                res.push([...cur]);
                return;
            }

            if (target < 0 || i >= nums.length) {
                return;
            }

            if (count.get(nums[i]) > 0) {
                cur.push(nums[i]);
                count.set(nums[i], count.get(nums[i]) - 1);
                backtrack(nums, target - nums[i], cur, i);
                count.set(nums[i], count.get(nums[i]) + 1);
                cur.pop();
            }

            backtrack(nums, target, cur, i + 1);
        };
        backtrack(A, target, [], 0);

        return res;
    }
}
