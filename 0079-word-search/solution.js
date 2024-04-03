/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const mLength = board.length

    if(mLength == 0){
        return false;
    }

    const nLength = board[0].length

    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];

    const check = (x,y,k) => {
        if (board[x][y] !== word[k]) return false;
        if (k === word.length - 1) return true;

        board[x][y] = '*'; // mark it as visited

        for (const [dx, dy] of directions) {
            const i = x + dx;
            const j = y + dy;
            if (i >= 0 && i < mLength && j >= 0 && j < nLength) {
                if (check(i, j, k + 1)) return true;
            }
        }

        board[x][y] = word[k]; // reset the value
        return false;
    }

    for(let i=0;i<mLength;i++){
        for(let j=0;j<nLength;j++){
            console.log(" I ", i , " J ", j)
            if(check(i,j,0)){
                return true;
            }
        }
    }

    return false;
};
