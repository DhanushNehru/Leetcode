/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let map = {}
    for (let c of p) {
        map[c] = (map[c] || 0) + 1
    }

    let r = 0, l = 0, count = 0
    let res = []
    while (r < s.length) {
        if (map[s[r]] > 0) {
            count++
        }
        map[s[r]]--
        r++
        if (count == p.length) {
            res.push(l)
        }
        if (r - l == p.length) {
            if (map[s[l]] >= 0) count--
            map[s[l]]++
            l++
        }
    }
    return res
};