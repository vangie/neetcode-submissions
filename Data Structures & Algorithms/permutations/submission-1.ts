class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums: number[]): number[][] {
        const res: number[][] = [];

        const dfs = (cur: number[], mask: number) => {
            if (cur.length == nums.length) {
                res.push([...cur]);
                return;
            }
            for (let j = 0; j < nums.length; j++) {
                if (mask & (1 << j)) {
                    continue;
                }
                cur.push(nums[j]);
                dfs(cur, mask | (1 << j));
                cur.pop();
            }
        };
        dfs([], 0);

        return res;
    }
}
