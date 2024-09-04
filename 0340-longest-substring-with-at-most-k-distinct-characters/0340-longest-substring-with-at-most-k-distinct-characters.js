/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
    if (k === 0) return 0; // Edge case: If k is 0, return 0 as no characters are allowed

    let charSet = new Set();
    let start = 0;
    let maxLen = 0;
    let charCount = new Array(256).fill(0);  // Array to track character counts

    for (let end = 0; end < s.length; end++) {
        const endChar = s[end];
        charSet.add(endChar);
        charCount[endChar.charCodeAt(0)]++;  // Increment the count of the current character

        // If the number of distinct characters exceeds k, shrink the window
        while (charSet.size > k) {
            const startChar = s[start];
            charCount[startChar.charCodeAt(0)]--;  // Decrement the count of the start character
            
            // If the count of the start character reaches 0, remove it from the set
            if (charCount[startChar.charCodeAt(0)] === 0) {
                charSet.delete(startChar);
            }
            start++;  // Move the start pointer to the right
        }

        // Update the maximum length of the valid window
        maxLen = Math.max(maxLen, end - start + 1);
    }

    return maxLen;
}



/*
var lengthOfLongestSubstringKDistinct = function(s, k) {
    let windowLen = 0;
    let start = 0;
    
    for (let i = 0; i < s.length; i++) {
        let substring = s.slice(start, i + 1);
        let uniqueChars = new Set(substring);
        
        if (uniqueChars.size <= k) {
            windowLen = Math.max(windowLen, substring.length);
        } else {
            start += 1;
        }
    }
    
    return windowLen;
};
*/


/*
def lengthOfLongestSubstringKDistinct(self, s: str, k: int) -> int:
        windowLen = 0
        start = 0
        
        for i in range(len(s)):
            if len(set(s[start:i+1])) <= k:
                windowLen = max(windowLen, len(s[start:i+1]))
            else:
                start += 1
                
        return windowLen
*/