/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    // traverse left -> right, top -> down
    // so only care about valid cells above && my left
    // subtract 2 walls for each one to account for both cells sharing
    // same wall
    let cnt = 0
    for (let row = 0; row < grid.length; row++ ) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === 1) {
                cnt += 4
                if (row > 0 && grid[row - 1][col] === 1) cnt -= 2
                if (col > 0 && grid[row][col - 1] === 1) cnt -= 2
            }
        }
    }
    return cnt
};