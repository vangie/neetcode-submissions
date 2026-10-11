class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates: number[], target: number): number[][] {
        const res: number[][] = [];
        const n = candidates.length;
        candidates.sort((a, b) => a - b);

        function dfs(total: number, cur: number[], i: number) {
            if (total === target) {
                res.push([...cur]);
            }

            for (let j = i; j < n; j++) {
                if (total + candidates[j] > target) {
                    return;
                }

                cur.push(candidates[j]);
                dfs(total + candidates[j], cur, j + 1);
                cur.pop();
                while (j + 1 < n && candidates[j] === candidates[j + 1]) {
                    j++;
                }
            }
        }
        dfs(0, [], 0);
        return res;
    }
}
