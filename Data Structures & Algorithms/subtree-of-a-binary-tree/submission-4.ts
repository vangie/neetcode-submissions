/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    private serialize(root: TreeNode | null): string {
        const res: string[] = [];

        const dfs = (node: TreeNode | null) => {
            if (node === null) {
                res.push("$#");
                return;
            }

            res.push("$" + node.val);
            dfs(node.left);
            dfs(node.right);
        };

        dfs(root);

        return res.join("");
    }

    /**
     * 构造 KMP 的 LPS 数组
     * lps[i] 表示：
     * pattern[0...i] 中，
     * 最长的“相同前缀和后缀”的长度
     */
    private buildLPS(pattern: string): number[] {
        const lps = new Array(pattern.length).fill(0);

        let len = 0;

        for (let i = 1; i < pattern.length; ) {
            if (pattern[i] === pattern[len]) {
                len++;
                lps[i] = len;
                i++;
            } else if (len > 0) {
                len = lps[len - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }

        return lps;
    }

    /**
     * 判断 pattern 是否出现在 text 中
     */
    private kmp(text: string, pattern: string): boolean {
        if (pattern.length === 0) return true;

        const lps = this.buildLPS(pattern);

        let i = 0; // text 指针
        let j = 0; // pattern 指针

        while (i < text.length) {
            if (text[i] === pattern[j]) {
                i++;
                j++;

                if (j === pattern.length) {
                    return true;
                }
            } else if (j > 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }

        return false;
    }

    /**
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
        const serializedRoot = this.serialize(root);
        const serializedSubRoot = this.serialize(subRoot);

        return this.kmp(serializedRoot, serializedSubRoot);
    }
}
