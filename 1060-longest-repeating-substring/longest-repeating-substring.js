/**
 * @param {string} s
 * @return {number}
 */
class TrieNode {
    constructor() {
        this.children = new Map();
        this.isEnd = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode());
            }
            node = node.children.get(char);
        }
        node.isEnd = true;
    }

    search(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children.has(char)) {
                return false;
            }
            node = node.children.get(char);
        }
        return node.isEnd;
    }
}

function longestRepeatingSubstring(s) {
    let maxLen = 0;
    const trie = new Trie();

    for (let i = 0; i < s.length; i++) {
        let node = trie.root;
        for (let j = i; j < s.length; j++) {
            const char = s[j];
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode());
            } else {
                maxLen = Math.max(maxLen, j - i + 1);
            }
            node = node.children.get(char);
        }
    }

    return maxLen;
}

/* Example usage:
console.log(longestRepeatingSubstring("abcd")); // Output: 0
console.log(longestRepeatingSubstring("abbaba")); // Output: 2
console.log(longestRepeatingSubstring("aabcaabdaab")); // Output: 3
*/