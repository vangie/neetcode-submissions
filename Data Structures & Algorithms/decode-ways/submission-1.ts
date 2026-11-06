class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s: string): number {
        const dp = new Map();
        dp.set(s.length, 1);
        const dfs = (i: number) => {
            if (dp.has(i)) return dp.get(i);
            if (s[i] === "0") return 0;

            let res = dfs(i + 1);
            if (
                i + 1 < s.length &&
                (s.charAt(i) === "1" || (s.charAt(i) === "2" && s.charAt(i + 1) < "7"))
            ) {
                res += dfs(i + 2);
            }
            dp.set(i, res);

            return res;
        };
        return dfs(0);
    }
}
