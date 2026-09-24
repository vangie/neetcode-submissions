class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let i=0;
        let j=heights.length -1;
        let max = 0;
        while(i<j){
            let amount = (j-i) * Math.min(heights[i], heights[j]);
            max = Math.max(max, amount);
            if(heights[i] < heights[j]){
                i++;
            } else {
                j--;
            }
        }
        return max;
    }
}
