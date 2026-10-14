class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits: string): string[] {
        if (digits.length === 0) return [];

        let res = [""];
        const digitToChar = {
            2: "abc",
            3: "def",
            4: "ghi",
            5: "jkl",
            6: "mno",
            7: "qprs",
            8: "tuv",
            9: "wxyz",
        };

        for(const d of digits){
            const tmp = [];
            for(const curStr of res) {
                for(const c of digitToChar[d]) {
                    tmp.push(curStr + c);
                }
            }
            res = tmp;
        }

        return res;
    }
}
