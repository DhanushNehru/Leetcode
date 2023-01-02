/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    title = title.split(" ")
    for(let index in title){
        if(title[index].length<=2){
            title[index] = title[index].toLowerCase()
        }
        else{
            title[index] = title[index].slice(0,1).toUpperCase() + title[index].slice(1).toLowerCase()
        }
    }
    return title.join(" ")
};