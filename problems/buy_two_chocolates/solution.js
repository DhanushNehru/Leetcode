/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    // Initialize variables to store the two minimum costs
    // As the constraints are 1 <= money <= 100, set initial minimum costs to a value greater than 100
    let firstMinCost = 101, secondMinCost = 101;

    // Iterate through the array of chocolate prices
    for (let p of prices) {
        // Check if the current price is smaller than the first minimum cost
        if (p < firstMinCost) {
            // If yes, update the second minimum cost and set the first minimum cost to the current price
            secondMinCost = firstMinCost;
            firstMinCost = p;
        } else {
            // If the current price is greater than or equal to the first minimum cost,
            // update the second minimum cost if the current price is smaller than the second minimum cost
            secondMinCost = Math.min(secondMinCost, p);
        }
    }

    // Calculate the leftover money after buying the two cheapest chocolates
    let leftover = money - (firstMinCost + secondMinCost);

    // Return the non-negative leftover money, or the original money if all available money is spent
    return leftover >= 0 ? leftover : money;    
};