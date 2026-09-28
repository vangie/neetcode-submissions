class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        let rows = matrix.length, cols = matrix[0].length,
            l = 0, r = rows * cols - 1;

        while(l<=r){
            let mid = l + ((r-l) >> 1);
            let rIdx = Math.floor(mid/cols), cIdx = mid % cols;

            if(matrix[rIdx][cIdx] > target){
                r = mid - 1;
            } else if(matrix[rIdx][cIdx] < target){
                l = mid + 1;
            } else {
                return true;
            }
        }

        return false;
    }
}
