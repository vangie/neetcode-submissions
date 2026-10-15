class TrieNode {
    public children = new Map<string, TrieNode>();
    public isEnd = false;
}

class WordDictionary {
    private root = new TrieNode();
    constructor() {}

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word: string): void {
        let cur = this.root;
        for (let i = 0; i < word.length; i++) {
            let child: TrieNode;
            if (!cur.children.has(word[i])) {
                child = new TrieNode();
                cur.children.set(word[i], child);
            } else {
                child = cur.children.get(word[i]);
            }

            if (i === word.length - 1) {
                child.isEnd = true;
            }
            cur = child;
        }
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string): boolean {
        return this.dfs(word, 0, this.root);
    }

    dfs(word: string, j: number, root: TrieNode): boolean {
        let cur = root;

        for (let i = j; i < word.length; i++) {
            const c = word[i];
            if (c === ".") {
                for (const [_, child] of cur.children.entries()) {
                    if (child !== null && this.dfs(word, i + 1, child)) {
                        return true;
                    }
                }
                return false;
            } else {
                const child = cur.children.get(c);
                if (!child) {
                    return false;
                }
                cur = child;
            }
        }
        return cur.isEnd;
    }
}
