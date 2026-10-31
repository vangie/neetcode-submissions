class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words: string[]): string {
        const adj = {};
        for (const word of words) {
            for (const char of word) {
                adj[char] = new Set();
            }
        }

        for (let i = 0; i < words.length - 1; i++) {
            const w1 = words[i];
            const w2 = words[i + 1];
            const minLen = Math.min(w1.length, w2.length);
            if (w1.length > w2.length && w1.slice(0, minLen) === w2.slice(0, minLen)) {
                return "";
            }
            for (let j = 0; j < minLen; j++) {
                if (w1[j] !== w2[j]) {
                    adj[w1[j]].add(w2[j]);
                    break;
                }
            }
        }

        const visited = {};
        const res = [];

        const dfs = (char: string) => {
            if (char in visited) return visited[char];
            visited[char] = true;

            for (const neighChar of adj[char]) {
                if (dfs(neighChar)) return true;
            }

            visited[char] = false;
            res.push(char);
            return false;
        };

        for (const char in adj) {
            if (dfs(char)) return "";
        }

        res.reverse();
        return res.join("");
    }
}
