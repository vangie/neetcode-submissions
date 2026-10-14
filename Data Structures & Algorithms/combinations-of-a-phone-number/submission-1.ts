class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits: string): string[] {
        if(digits.length === 0) return [];
        const mapping = {
            "2": "abc",
            "3": "def",
            "4": "ghi",
            "5": "jkl",
            "6": "mno",
            "7": "pqrs",
            "8": "tuv",
            "9": "wxyz",
        };
        const res = [];

        const dfs = (cur: string[], i: number) => {
            if (i === digits.length) {
                res.push([...cur].join(""));
                return;
            }
            for (let c of mapping[digits[i]]) {
                cur.push(c);
                dfs(cur, i + 1);
                cur.pop();
            }
        };

        dfs([], 0);

        return res;
    }
}
