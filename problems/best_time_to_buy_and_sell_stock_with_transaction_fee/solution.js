/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    const length = prices.length
    let buying = 0, selling = -prices[0]

    for(let i=1; i<length;i++){
        buying = Math.max(buying, selling + prices[i] - fee)
        selling = Math.max(selling, buying - prices[i])
    }

    return buying
};