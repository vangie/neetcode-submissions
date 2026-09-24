class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const count = new Map<number,number>();
        for(let num of nums){
            count.set(num, (count.get(num) ?? 0) + 1);
        }

        const freq: number[][] = new Array(nums.length + 1);

        for(const [num, cnt] of count.entries()) {
            freq[cnt] = freq[cnt] || [];
            freq[cnt].push(num);
        }

        const res: number[] = [];
        let index = 0;
        for(let i= nums.length;  i>0 &&index <k; i--){
            for(let num of freq[i] ?? []){
                res[index++] = num;
                if(index == k){
                    return res;
                }
            }   
        }

        return res;
        
    }
}
