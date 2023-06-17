/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var makeArrayIncreasing = function (arr1, arr2) {
    arr2.sort((a, b) => a - b)
    const cache = new Map()

    // binary search for an element that is greater than provided value
    const getMinimalReplacement = (noLessThan) => {
        let left = 0
        let right = arr2.length - 1

        while (left < right) {
            const mid = Math.floor((left + right) / 2)

            if (arr2[mid] <= noLessThan) {
                left = mid + 1
            } else {
                right = mid
            }
        }

        return arr2[right] > noLessThan ? arr2[right] : -1
    }

    const dfs = (i, ops, prev) => {
        if (i >= arr1.length) return 0
        const str = `${prev}~${i}`
        if (cache.has(str)) return cache.get(str)

        // misOps - minimal number of operations for current i
        let minOps = Infinity

        // replace with smallest possible from arr2
        const replacement = getMinimalReplacement(prev)
        //  if replacement == -1 => no replacement found
        if (replacement !== -1) {
            minOps = Math.min(minOps, dfs(i + 1, ops, replacement) + 1) 
        }

        // no replacement
        if (arr1[i] > prev) {
            minOps = Math.min(minOps, dfs(i + 1, ops, arr1[i]))
        }
        cache.set(str, minOps)
        return minOps
    }

    const ops = dfs(0, 0, -1)
    return ops > arr2.length ? -1 : ops

};