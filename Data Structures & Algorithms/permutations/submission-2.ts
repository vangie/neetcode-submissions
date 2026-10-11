class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums: number[]): number[][] {
        const res: number[][] = [];

        const backtrack = (nums: number[], i: number) => {
            if (i == nums.length) {
                res.push([...nums]);
                return;
            }
            for (let j = i; j < nums.length; j++) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
                backtrack(nums, i + 1);
                [nums[i], nums[j]] = [nums[j], nums[i]];
            }
        };
        backtrack(nums, 0);

        return res;
    }
}
