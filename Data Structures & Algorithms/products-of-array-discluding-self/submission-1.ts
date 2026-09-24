class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const prefixProducts : number[] = [];
        const suffixProducts : number[] = [];
        const res:number[] = [];
        let product: number = 1;

        for(let i=0;i<nums.length;i++) {
            prefixProducts[i] = product;
            product *= nums[i];
        }

        product = 1;

        for( let i=nums.length -1;i>=0;i--){
            suffixProducts[i] = product;
            product *= nums[i];
        }


        for(let i=0;i<nums.length;i++){
            res.push(prefixProducts[i]*suffixProducts[i]);
        }

        return res;
    }
}
