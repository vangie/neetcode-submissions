class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const numSet = new Set<number>();
        for(const num of nums){
            if(numSet.has(num)){
                return true;
            }
            numSet.add(num);
        }
        return false;
    }
}
