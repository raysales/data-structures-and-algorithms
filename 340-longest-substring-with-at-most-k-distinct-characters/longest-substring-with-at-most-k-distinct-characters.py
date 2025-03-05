class Solution:
    def lengthOfLongestSubstringKDistinct(self, s: str, k: int) -> int:
        windowLen = 0
        start = 0
        
        for i in range(len(s)):
            if len(set(s[start:i+1])) <= k:
                windowLen = max(windowLen, len(s[start:i+1]))
            else:
                start += 1
                
        return windowLen