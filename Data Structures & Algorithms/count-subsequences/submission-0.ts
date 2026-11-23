class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    numDistinct(s: string, t: string): number {
        const sLen = s.length,
            tLen = t.length;
        const memo = {};

        const dfs = (si: number, ti: number) => {
            if (ti === tLen) {
                return 1;
            }

            if (si === sLen) {
                return 0;
            }

            const key = `${si}-${ti}`;
            if (key in memo) {
                return memo[key];
            }

            let res = 0;
            if(s[si] === t[ti]){
                res += dfs(si+1, ti+1);
            }

            res += dfs(si+1, ti);

            return memo[key] = res;
        };

        return dfs(0, 0);
    }
}
