/**
 * @param {string} colors
 * @param {number[][]} edges
 * @return {number}
 */
var largestPathValue = function(colors, edges) {
    const paths = new Map() // a -> b
    const incomes = new Map() // coming into node
    const checked = new Set()
    const cache = new Map()
    const n = colors.length

    for (let i = 0; i < n; i++) {
        incomes.set(i, 0)
        paths.set(i, new Set())
    }

    for (const [a, b] of edges) {
        if (a == b) return -1
        paths.get(a).add(b)
        incomes.set(b, incomes.get(b) + 1)
    }

    let maxColour = 0

    const dfs = (node, seen) => {
        if (maxColour == -1) return null
        if (seen.has(node)) {
            maxColour = -1 
            return null
        }
        if (cache.has(node)) return cache.get(node)

        checked.add(node)
        seen.add(node)
        const colour = colors[node]
        const mp = new Map()

        const neighbours = paths.get(node)
        if (neighbours && neighbours.size > 0) {
            neighbours.forEach((nb) => {
                const resp = dfs(nb, seen)
                if (resp) {
                    resp.forEach((v, k) => {
                        const curr = mp.get(k) || 0
                        mp.set(k, Math.max(curr, v))
                    })
                }
            })
        }

        mp.set(colour, (mp.get(colour) || 0) + 1)            
        seen.delete(node)
        cache.set(node, mp)
        return mp
    }


    incomes.forEach((v, k) => {
        if (v == 0) { // starting dfs only for the nodes that doesn't have incoming edges (edge nodes)
            const mm = dfs(k, new Set())
            mm.forEach((v, k) => {
                if (maxColour !== -1) maxColour = Math.max(maxColour, v)
            })
        }
    })

    if (checked.size < n) return -1
    return maxColour
};