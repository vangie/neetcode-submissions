class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]): number[][] {
        const res: number[][] = [];

        function dfs(nums: number[], i: number, subset: number[], res: number[][]): void {
            if (i >= nums.length) {
                res.push([...subset]);
                return;
            }
            subset.push(nums[i]);
            dfs(nums, i + 1, subset, res);
            subset.pop();
            dfs(nums, i + 1, subset, res);
        }

        dfs(nums, 0, [], res);

        return res;
    }
}
