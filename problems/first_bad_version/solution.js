/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    
    return function(n) {
                let start = 1
                let end = n
                while(end > start){
                    const middle = parseInt(start + ((end-start) / 2)) 
                    if(isBadVersion(middle)){
                        end=middle;
                    }
                    else{
                        start=middle+1;
                    }
                }
                return start;                
    };
};