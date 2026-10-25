class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
        if (!wordList.includes(endWord)) return 0;

        const words = [...new Set([beginWord, ...wordList])];
        const n = words.length;

        const adj = Array.from({ length: n }, () => []);

        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                if (this.isAdjacent(words[i], words[j])) {
                    adj[i].push(j);
                    adj[j].push(i);
                }
            }
        }

        let res = 0;
        const q = new Queue();
        const beginIdx = words.indexOf(beginWord);
        const endIdx = words.indexOf(endWord);
        const visited = Array(n).fill(false);

        q.push(beginIdx);
        visited[beginIdx] = true;
        
        while (!q.isEmpty()) {
            res++;
            for (let t = q.size() - 1; t >= 0; t--) {
                const c = q.pop();

                if (c === endIdx) return res;
                for (let nei of adj[c]) {
                    if (visited[nei]) continue;

                    visited[nei] = true;
                    q.push(nei);
                }
            }
        }
        return 0;
    }

    isAdjacent(a: string, b: string) {
        let diff = 0;
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                diff++;
                if (diff > 1) return false;
            }
        }
        return diff === 1;
    }
}
