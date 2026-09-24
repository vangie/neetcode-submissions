class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const res: number[] = new Array(nums.length).fill(1);
        let prod = 1;

        for(let i=0;i<nums.length;i++) {
            res[i] = prod;
            prod *= nums[i];
        }

        prod = 1;

        for(let i = nums.length -1;i>=0;i--){
            res[i] *= prod;
            prod *= nums[i];
        }

        return res;

    }
}
