/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
   let i = 0
   let outputIdx = 0
   
   while (i < chars.length) {
       let charCnt = 0
       let curChar = chars[i]
       while (i < chars.length && curChar === chars[i]) {
           charCnt++
           i++
       }
       // overwrite input at cur outputIdx w/ curChar
       chars[outputIdx++] = curChar
       
       if (charCnt > 1) {
           // traverse through potentially > single digit count
           for (const num of charCnt.toString()) {
               // overwrite input at cur outputIdx w/ num
               chars[outputIdx++] = num
           }
       }
   }
    return outputIdx
};