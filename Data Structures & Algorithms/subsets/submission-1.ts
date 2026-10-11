class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]): number[][] {
        let res: number[][] = [[]];
        for (let num of nums) {
            let size = res.length;
            for (let i = 0; i < size; i++) {
                let subsets = res[i].slice();
                subsets.push(num);
                res.push(subsets);
            }
        }

        return res;
    }
}
