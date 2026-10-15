class TreeNode {
    public children = new Map<string, TreeNode>();
    public isEnd = false;
}

class PrefixTree {
    private root = new TreeNode();
    constructor() {}

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word: string): void {
        let cur = this.root;
        for (let i = 0; i < word.length; i++) {
            let child: TreeNode;
            if (!cur.children.has(word[i])) {
                child = new TreeNode();
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
        let cur = this.root;
        for (let i = 0; i < word.length; i++) {
            let child = cur.children.get(word[i]);
            if (!child) {
                return false;
            }

            if (i === word.length - 1 && !child.isEnd) {
                return false;
            }
            cur = child;
        }
        return true;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix: string): boolean {
        let cur = this.root;
        for (let i = 0; i < prefix.length; i++) {
            let child = cur.children.get(prefix[i]);
            if (!child) {
                return false;
            }
            cur = child;
        }
        return true;
    }
}
