/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let left = 0,right = 1, max_profit = 0, profit;
    while (right < prices.length) {
        if (prices[left] < prices[right]) {
            profit = prices[right] - prices[left]; // our current profit
            max_profit = Math.max(max_profit, profit);
        } else {
            left = right;
        }
        right++;
    }
    return max_profit;
};