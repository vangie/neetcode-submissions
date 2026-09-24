class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        nums.sort((a, b)=>a-b);

        const res: number[][] = []

        for(let i=0;i<nums.length;i++){
            let tmp = 0 - nums[i],
                j=i+1,
                k=nums.length-1;
            while(j<k){
                if(nums[j]+nums[k] < tmp && j<k) j++
                else if(nums[j]+nums[k] > tmp && j<k) k--;
                else {
                    res.push([nums[i], nums[j], nums[k]]);
                    j++;
                    k--;
                    while(nums[j-1]==nums[j] && j<k) j++; 
                    while(nums[k+1]==nums[k] && j<k) k--; 
                }

            }
            while(i<nums.length-1 && nums[i]==nums[i+1]) i++;
        }

        return res;
    }
}
