class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses: number, prerequisites: number[][]): number[] {
        const indegrees = Array(numCourses).fill(0);
        const preMap = new Map<number, number[]>();
        for (let i = 0; i < numCourses; i++) {
            preMap.set(i, []);
        }

        for (let i = 0; i < prerequisites.length; i++) {
            let [dst, src] = prerequisites[i];
            indegrees[dst]++;
            preMap.get(src).push(dst);
        }

        const q = new Queue();
        const order = [];
        let finish = 0;

        for (let i = 0; i < numCourses; i++) {
            if (indegrees[i] === 0) {
                q.push(i);
            }
        }

        while (!q.isEmpty()) {
            let c = q.pop();
            finish++;
            order.push(c);
            for (let nei of preMap.get(c)) {
                indegrees[nei]--;
                if (indegrees[nei] === 0) {
                    q.push(nei);
                }
            }
        }

        if (finish === numCourses) {
            return order;
        } else {
            return [];
        }
    }
}
