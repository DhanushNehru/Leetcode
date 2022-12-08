/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
const isLongPressedName = function(name, typed) {
    let namePointer = 0;
    // we iterate based on typed value 
    for (let typedPointer = 0; typedPointer < typed.length; typedPointer++) {
        if (typed[typedPointer] === name[namePointer]) {
            namePointer++;
        } else if (typed[typedPointer] === name[namePointer - 1]) { 
            continue;
        } else {
            return false;
        }
    }
    return namePointer === name.length;
};