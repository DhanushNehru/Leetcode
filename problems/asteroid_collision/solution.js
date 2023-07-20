/**
 * @param {number[]} asteroids
 * @return {number[]}
 */

var asteroidCollision = function(asteroids) {
    const result = [];

    for (let i = 0; i < asteroids.length; i++) {
        if (i === 0 || result.length === 0 || result[result.length - 1] < 0 || (asteroids[i] > 0 && result[result.length - 1] > 0)) {
            result.push(asteroids[i]);
        } else {
            while (result.length > 0 && result[result.length - 1] >= 0 && result[result.length - 1] < Math.abs(asteroids[i])) {
                result.pop();
            }
            if (result.length === 0 || result[result.length - 1] < 0) {
                result.push(asteroids[i]);
            } else if (result[result.length - 1] === Math.abs(asteroids[i])) {
                result.pop();
            }
        }
    }
    
    return result;
};
