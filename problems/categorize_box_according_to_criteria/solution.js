/**
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @param {number} mass
 * @return {string}
 */
var categorizeBox = function(length, width, height, mass) {
    const tenPowerFour = Math.pow(10,4)
    const tenPowerNine = Math.pow(10,9)
    let resul = ""
    let isHeavy = false, isBulky = false;
    if(mass >= 100){
        result = "Heavy"
        isHeavy = true
    }
    if(length >= tenPowerFour ||  width >= tenPowerFour || height >= tenPowerFour || length*width*height >= tenPowerNine){
        result = "Bulky"
        isBulky = true
    }
    if(isHeavy==true && isBulky==true){
        result = "Both"
    }
    else if(isHeavy==false && isBulky==false){
        result = "Neither"
    }
    return result;
};