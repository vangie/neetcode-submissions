class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums: number[], target: number): number[][] {
        const ans: number[][] = [];
        function backtrack(
            nums: number[],
            target: number,
            ans: number[][],
            cur: number[],
            index: number,
        ) {
            if (target === 0) {
                ans.push([...cur]);
            } else if (target < 0 || index >= nums.length) {
                return;
            } else {
                cur.push(nums[index]);
                backtrack(nums, target - nums[index], ans, cur, index);

                cur.pop();
                backtrack(nums, target, ans, cur, index + 1);
            }
        }
        backtrack(nums, target, ans, [], 0);
        return ans;
    }
}
