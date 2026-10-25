class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
        if (!wordList.includes(endWord)) {
            return 0;
        }
        const nei = {};
        wordList.push(beginWord);
        for (const word of wordList) {
            for (let j = 0; j < word.length; j++) {
                const pattern = word.substring(0, j) + "*" + word.substring(j + 1);
                (nei[pattern] ??= []).push(word);
            }
        }
        const visit = new Set([beginWord]);
        const q = new Queue([beginWord]);
        let res = 1;
        while (!q.isEmpty()) {
            const size = q.size();
            for (let i = 0; i < size; ++i) {
                const word = q.pop();
                if (word === endWord) {
                    return res;
                }
                for (let j = 0; j < word.length; ++j) {
                    const pattern = word.substring(0, j) + "*" + word.substring(j + 1);
                    for (const neiWord of nei[pattern]) {
                        if (!visit.has(neiWord)) {
                            visit.add(neiWord);
                            q.push(neiWord);
                        }
                    }
                }
            }
            ++res;
        }
        return 0;
    }
}
