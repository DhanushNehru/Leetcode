var Trie = function() {
    this.trie = {}
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let trie = this.trie
    for(char of word){
        if (trie[char] == null) {
            trie[char] = {};
        }
        trie = trie[char]
    }
    trie['.'] = null;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let trie = this.trie;
    for (let letter of word) {
        if (!trie[letter]) {
            return false;
        };
        trie = trie[letter];
    };
    return '.' in trie;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let trie = this.trie;
    for (let letter of prefix) {
        if (!trie[letter]) {
            return false;
        }
        trie = trie[letter];
    };
    return Object.keys(trie).length !== 0;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */