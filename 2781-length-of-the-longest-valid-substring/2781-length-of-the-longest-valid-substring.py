class Solution:

    def longestValidSubstring(self, word: str, forbidden: List[str]) -> int:
        forbidden = set(forbidden) # n * m ** 2
        l, res = 0, 0
        for r in range(len(word)):
            for i in range(r, max(r - 10, l - 1), -1):
                if word[i: r + 1] in forbidden:
                    l = i + 1
                    break
            res = max(res, r - l + 1)
        return res