class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums: number[]): number[][] {
        const res: number[][] = [];
        const used = new Array(nums.length).fill(false);

        const dfs = (cur: number[]) => {
            if (cur.length == nums.length) {
                res.push([...cur]);
                return;
            }
            for (let j = 0; j < nums.length; j++) {
                if (used[nums[j]]) {
                    continue;
                }
                cur.push(nums[j]);
                used[nums[j]] = true;
                dfs(cur);
                cur.pop();
                used[nums[j]] = false;
            }
        };
        dfs([]);

        return res;
    }
}
