class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if(nums.length === 0) {
            return 0;
        }
        nums.sort((a, b) => a - b);

        let i = 0, curr = nums[0], streak = 0, res = 0;

        while(i < nums.length) {
            if(curr != nums[i]){
                curr = nums[i];
                streak = 0;
            }
            while(i< nums.length && nums[i] == curr){
                i++;
            }
            streak++;
            curr++;
            res = Math.max(res, streak);
        }

        return res;
    }
}
