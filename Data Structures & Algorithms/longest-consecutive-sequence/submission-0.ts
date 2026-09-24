class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if(nums.length ==0) return 0;
        nums.sort((a, b) => a - b);
        let longest = 1;
        let current = 1;
        for(let i=0,j=1;j<nums.length;i++,j++){
            if(nums[j] === nums[i]) continue;
            if(nums[j]-nums[i] === 1){
                current++;
            }else{
                current = 1;
            }
            longest = Math.max(longest, current);
        }
        return longest;
    }
}
