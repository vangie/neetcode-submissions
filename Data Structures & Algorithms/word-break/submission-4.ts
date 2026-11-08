class TrieNode {
    constructor(
        public children: Record<string, TrieNode> = {},
        public isWord: boolean = false,
    ) {}
}

class Trie {
    constructor(private root = new TrieNode()) {}

    insert(word: string) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isWord = true;
    }

    search(s: string, i: number, j: number): boolean {
        let node = this.root;
        for (let idx = i; idx <= j; idx++) {
            if (!node.children[s[idx]]) {
                return false;
            }
            node = node.children[s[idx]];
        }
        return node.isWord;
    }
}

class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s: string, wordDict: string[]): boolean {
        const trie = new Trie();
        let maxLen = 0;
        for (let w of wordDict) {
            trie.insert(w);
            maxLen = Math.max(maxLen, w.length);
        }

        const dp = new Array(s.length + 1).fill(false);
        dp[s.length] = true;

        for (let i = s.length - 1; i >= 0; i--) {
            for (let j = i; j < Math.min(s.length, i + maxLen); j++) {
                if (trie.search(s, i, j)) {
                    dp[i] = dp[j + 1];
                    if (dp[i]) break;
                }
            }
        }

        return dp[0];
    }
}
