/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    //edge case when r * c > mat rows * mat cols
    rowLen = mat.length
    colLen = mat[0].length
    if (r * c !== rowLen * colLen) return mat
    
    const output = Array(r).fill().map(() => Array(c).fill(0))
    let curRow = 0
    let curCol = 0
    for (let row = 0; row < mat.length; row++ ) {
        for (let col = 0; col < mat[0].length; col++) {
            output[curRow][curCol] = mat[row][col]
            // increment curCols
            curCol++
            // whenever curCol reaches c, start new row & reset curCol to 0
            if (curCol === c) {
                curRow++
                curCol = 0
            }
        }
    }
    return output
};