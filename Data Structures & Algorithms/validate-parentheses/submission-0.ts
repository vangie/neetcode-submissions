class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack: string[] = [];
        const lPart = new Set("({[");
        const pairs = [
            ["[", "]"],
            ["(", ")"],
            ["{", "}"],
        ];

        for (let c of s) {
            if (lPart.has(c)) {
                stack.push(c);
                continue;
            }

            let match = false;
            for (let p of pairs) {
                if (c === p[1] && stack[stack.length - 1] === p[0]) {
                    match = true;
                    stack.pop();
                    break;
                }
            }
            if (!match) {
                return false;
            }
        }

        return stack.length == 0;
    }
}
