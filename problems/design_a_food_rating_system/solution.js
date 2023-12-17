/**
 * @param {string[]} foods
 * @param {string[]} cuisines
 * @param {number[]} ratings
 */
var FoodRatings = function(foods, cuisines, ratings) {
    this.foods = foods;
    this.cuisines = cuisines;
    this.ratings = ratings;
};

/** 
 * @param {string} food 
 * @param {number} newRating
 * @return {void}
 */
FoodRatings.prototype.changeRating = function(food, newRating) {
    const foodId =this.foods.indexOf(food)
    this.ratings[foodId] = newRating;
};

/** 
 * @param {string} cuisine
 * @return {string}
 */
FoodRatings.prototype.highestRated = function(cuisine) {

    let highestRating = 0; // Initialize to lowest possible value
    let highestRatedFood = null
    let highestRatedFoodArr = [] // In case of multiple foods with the same highest rating


    for (let i = 0; i < this.foods.length; i++) {
        // Check if the cuisine of the current food matches the specified cuisine
        if (this.cuisines[i] === cuisine) {
            // Check if this food's rating is higher than or equal the current highest
            if (this.ratings[i] >= highestRating) {
                if(this.ratings[i] == highestRating){
                    // If the rating is equal to the current highest, add to the array
                    highestRatedFoodArr.push(this.foods[i])
                }else{
                    // Update the highest rating and associated food
                    highestRating = this.ratings[i];
                    highestRatedFood = this.foods[i];
                    highestRatedFoodArr = [highestRatedFood] // Reset array for a new highest rating
                }
            }
        }
    }

    // If there is only one highest-rated food, return it
    if(highestRatedFoodArr.length == 0){
        return highestRatedFood;
    }
    else{
        // If there are multiple foods with the same highest rating, sort lexicographically
        highestRatedFoodArr.sort((a,b) => a.localeCompare(b))
        // Return the lexicographically highest-rated food
        return highestRatedFoodArr[0]
    }
};

/** 
 * Your FoodRatings object will be instantiated and called as such:
 * var obj = new FoodRatings(foods, cuisines, ratings)
 * obj.changeRating(food,newRating)
 * var param_2 = obj.highestRated(cuisine)
 */