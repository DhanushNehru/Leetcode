/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    const initialVal = init
    let counterVal = init
    return {
        increment: () => {
            return ++counterVal
        },
        decrement: () => {
            return --counterVal         
        },
        reset: () => {
            counterVal = initialVal
            return initialVal
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */