class Solution {
    /**
     * @param {string[][]} tickets
     * @return {string[]}
     */
    findItinerary(tickets: string[][]): string[] {
        const adj = {};
        const res = [];

        tickets
            .sort()
            .reverse()
            .forEach(([src, dst]) => (adj[src] ??= []).push(dst));

        const dfs = (src: string) => {
            while (adj[src]?.length > 0) {
                const dst = adj[src].pop();
                dfs(dst);
            }
            res.push(src);
        };
        dfs("JFK");
        return res.reverse();
    }
}
