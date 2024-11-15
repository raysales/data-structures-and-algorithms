class TrieNode {
    constructor() {
        this.children = {};
        this.countWords = 0;
        this.countPrefix = 0;
    }
}

var Trie = function() {
    //constructor() {
        this.root = new TrieNode();
    //}
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
            node.countPrefix += 1;
        }
        node.countWords += 1;
};

/** 
 * @param {string} word
 * @return {number}
 */
Trie.prototype.countWordsEqualTo = function(word) {
    let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                return 0;
            }
            node = node.children[char];
        }
        return node.countWords;
};

/** 
 * @param {string} prefix
 * @return {number}
 */
Trie.prototype.countWordsStartingWith = function(prefix) {
    let node = this.root;
        for (const char of prefix) {
            if (!node.children[char]) {
                return 0;
            }
            node = node.children[char];
        }
        return node.countPrefix;
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.erase = function(word) {
    let node = this.root;
        for (const char of word) {
            if (!node.children[char]) return;
            node = node.children[char];
            node.countPrefix -= 1;
        }
        node.countWords -= 1;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.countWordsEqualTo(word)
 * var param_3 = obj.countWordsStartingWith(prefix)
 * obj.erase(word)
 */