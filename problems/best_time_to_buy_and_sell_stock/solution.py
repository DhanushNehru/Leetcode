class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        max_profit = 0
        min_buy_price = prices[0]
        for price in prices:
            todays_price = price
            min_buy_price = min(min_buy_price, todays_price)
            max_profit = max(todays_price - min_buy_price, max_profit)
        return max_profit
