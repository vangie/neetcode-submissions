class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        let rowflag;
        let colFlags: number[] = new Array(9).fill(0);
        let gridFlags: number[];
        for(let i=0;i<9;i++){
            rowflag = 0;
            if(i%3 == 0){
                gridFlags = new Array(3).fill(0);
            }
            for(let j=0;j<9;j++) {
                let digitStr = board[i][j];
                if(digitStr === "."){
                    continue;
                }
                let digit = parseInt(digitStr);
                if(rowflag & (1 << digit)){
                    return false;
                } else {
                    rowflag |= (1 << digit)
                }
                
                if(colFlags[j] & (1 << digit)){
                    return false;
                } else {
                    colFlags[j] |= (1 << digit)
                }

                let grid = Math.floor(j/3);
                if(gridFlags[grid] & (1 << digit)){
                    return false;
                }else{
                    gridFlags[grid] |= (1 << digit);
                }
            }
        }
        return true;
    }
}
