class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s: string, wordDict: string[]): boolean {
        const memo = { [s.length]: true };
        const wordSet = new Set(wordDict);
        const dfs = (i: number): boolean => {
            if(i in memo) return memo[i];

            for (let j = i + 1; j <= s.length; j++) {
                if (wordSet.has(s.substring(i, j))) {
                    if (dfs(j)) {
                        return memo[i] = true;
                    }
                }
            }
            return memo[i] = false;
        };
        return dfs(0);
    }
}
