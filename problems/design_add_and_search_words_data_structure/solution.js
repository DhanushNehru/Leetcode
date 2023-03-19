var WordDictionary = function() {
    //using an obj to store added strings
    this.map = {}
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    //using the length of stings as index to avoid full traversal
    if (word.length in this.map) {
        this.map[word.length].push(word)
    } else {
        this.map[word.length] = [word]
    }
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    const len = word.length
    let j = 0;
    if (len in this.map) {
        for (let i = 0; i < this.map[len].length; i++) {
            for ( j = 0; j < len; j++) {
                //compare with the stored strings which have same length
                if (word[j] !== '.' && word[j] !== this.map[len][i][j]) {
                    break
                }
            }
            if (j === len) {
                return true
            }            
        }
    }
    return false
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */