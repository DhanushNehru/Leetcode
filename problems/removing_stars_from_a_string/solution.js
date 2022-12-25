/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    // we need to take a copy because s will be mutated when we slice and assign
    let sString = s;
    for(let i=0;i<sString.length;i++){
        const starIndex = s.indexOf("*")
        if(starIndex == -1){
            break;
        }{
            // we remove non-star character to its left, as well as remove the star itself
            s=s.slice(0, starIndex-1)+s.slice(starIndex+1)
        }   
    }
    return s;
};