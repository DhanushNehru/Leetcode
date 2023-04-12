/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const stack = []
    path = path.split('/');
    for(char of path){
        if(char == '.' || char == ''){
            continue;
        }
        else if(char == '..'){
            stack.pop()
        }
        else{
            stack.push(char)
        }
    }
    return '/'+stack.join('/')
};