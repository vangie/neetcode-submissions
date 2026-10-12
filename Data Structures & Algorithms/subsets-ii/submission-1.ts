class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums: number[]): number[][] {
        const res: number[][] = [];
        nums.sort((a, b) => a - b);

        const backtrack = (cur: number[], i: number) => {
            res.push([...cur]);

            for (let j = i; j < nums.length; j++) {
                if (j > i && nums[j] === nums[j - 1]) {
                    continue;
                }
                cur.push(nums[j]);
                backtrack(cur, j + 1);
                cur.pop();
            }
        };
        backtrack([], 0);

        return res;
    }
}
