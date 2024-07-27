/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    let currentColor = image[sr][sc]
    // edge case if the color clicked equal the newColor 
    if(currentColor === color) return image
    
    // color the matrix(start graph traversal)
    dfs( image, sr, sc, currentColor, color)
    return image
}

const dfs = (image, sr, sc, userClickedColor, newColor) => {
    const dirArr = [[0,1], [1,0], [0,-1], [-1,0]]
    // base Case 1 : boundry check 
    if (sr < 0 || sr >= image.length || 
        sc < 0 || sc > image[0].length) return
    
    //base case 2 if current color is not the same as orginal clicked color
    if(image[sr][sc] !== userClickedColor) return
    
     
    //update current cell and assign the new color 
    image[sr][sc] = newColor
    let newRow, newCol
    for (const [dRow, dCol] of dirArr) {
        newRow = sr + dRow
        newCol = sc + dCol
        dfs(image,newRow, newCol, userClickedColor, newColor)
        /*
        dfs(image, sr - 1 , sc, userClickedColor, newColor)
        dfs(image, sr + 1 , sc, userClickedColor, newColor)
        dfs(image, sr, sc + 1, userClickedColor, newColor)
        dfs(image, sr, sc - 1, userClickedColor, newColor)
        */
    }
} 