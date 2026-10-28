class Solution {
    /**
     * @param {string[][]} tickets
     * @return {string[]}
     */
    findItinerary(tickets: string[][]): string[] {
        const adj = {};
        const res = [];
        const stack = ["JFK"];

        tickets
            .sort()
            .reverse()
            .forEach(([src, dst]) => (adj[src] ??= []).push(dst));

        while (stack.length > 0) {
            let cur = stack[stack.length - 1];
            if (!adj[cur] || adj[cur].length === 0) {
                res.push(stack.pop()!);
            } else {
                stack.push(adj[cur].pop()!);
            }
        }
        return res.reverse();
    }
}
