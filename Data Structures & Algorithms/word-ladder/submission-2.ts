class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
        if (!wordList.includes(endWord) || beginWord === endWord) {
            return 0;
        }

        const n = wordList.length;
        const m = wordList[0].length;
        const adj = Array.from({ length: n }, () => []);

        const mp = new Map();

        for (let i = 0; i < n; i++) {
            mp.set(wordList[i], i);
        }

        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                let cnt = 0;
                for (let k = 0; k < m; k++) {
                    if (wordList[i][k] !== wordList[j][k]) {
                        cnt++;
                    }
                }
                if (cnt === 1) {
                    adj[i].push(j);
                    adj[j].push(i);
                }
            }
        }

        const q = new Queue();
        let res = 1;
        const visit = new Set();

        const A_CODE = "a".charCodeAt(0);
        const ALPHABET_SIZE = 26;
        for (let i = 0; i < m; i++) {
            for (let c = 0; c < ALPHABET_SIZE; c++) {
                const ch = String.fromCharCode(A_CODE + c);
                if (ch === beginWord[i]) {
                    continue;
                }
                const word = beginWord.slice(0, i) + ch + beginWord.slice(i + 1);
                if (mp.has(word) && !visit.has(mp.get(word))) {
                    q.push(mp.get(word));
                    visit.add(mp.get(word));
                }
            }
        }

        while (!q.isEmpty()) {
            res++;
            let size = q.size();
            for (let i = 0; i < size; i++) {
                let node = q.pop();
                if (wordList[node] === endWord) {
                    return res;
                }
                for (let nei of adj[node]) {
                    if (!visit.has(nei)) {
                        visit.add(nei);
                        q.push(nei);
                    }
                }
            }
        }

        return 0;
    }
}
