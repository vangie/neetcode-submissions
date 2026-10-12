class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums: number[]): number[][] {
        const res: number[][] = [];
        nums.sort((a, b) => a - b);

        const backtrack = (cur: number[], i: number) => {
            if (i === nums.length) {
                res.push([...cur]);
                return;
            }
            cur.push(nums[i]);

            backtrack(cur, i+1);
            cur.pop();
            let j = i + 1;
            while (j < nums.length && nums[j] === nums[i]) j++;
            backtrack(cur, j);
        };
        backtrack([], 0);

        return res;
    }
}
