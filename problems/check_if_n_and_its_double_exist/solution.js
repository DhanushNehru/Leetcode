/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    let mul = {};
    let res = false;

    for(let i = 0; i< arr.length; i++ ) {
        // first if conditon to handle the constrain
        // second if condition to handle [0,0]
        if(arr[i]*2 in mul || arr[i]/2 in mul) {
            res = true;
            break;
        }
        mul[arr[i]] = i;
    }
    return res;
};