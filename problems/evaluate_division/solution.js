/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    /* Create all variables map from `equations` array, and establish relationship betweem 2 variables */
    const map = {};    
    
    for(let i = 0; i < equations.length; i++) {
        const [eqA, eqB] = equations[i];
        const val = values[i];
        
        map[eqA] || (map[eqA] = {});
        map[eqB] || (map[eqB] = {});
        
        /* equation: ["x1", "x2"],  value: [3.0], then create a map map[x1][x2] = 3, map[x2][x1] = 1 / 3  */
        map[eqA][eqB] = val;
        map[eqB][eqA] = 1 / val;
    }
    
    let visitedMap = Object.keys(map).reduce((r, eq) =>  ({ ...r, [eq]: false }), {});
    let visitedMapCurrent = {};
    
    const output = [];
    
    const checkChain = (source, dest, product = 1) => {
        /* Mark current source as visited to handle cyclic refs */
        visitedMapCurrent[source] = true;
        
        /**
        * x1/x2 = 3, x2/x3 = 4, x3/x4 = 5, x4/x5 = 6;
        *
        * Lets say, to find relation between x1 and x5, we need to assess the entire relation equations chain
        * x1 = 3 * x2. x2 = 4 * x3, x3 = 5 * x4, x4 = 6 * x5;
        *
        * To have direct corelation betweeen x1 and x5
        * x1 = 3 * ( 4 * x3 ) => x2 repplaced
        * x1 = 3 * ( 4 * ( 5 * x4 )) => x3 replaced
        * x1 = 3 * ( 4 * ( 5 * ( 6 * x5 ))) => x4 replaced;
        * x1 = 3 * 4 * 5 * 6 * x5
        * x1 = 360 * x5
        *
        * If source = x1, dest = x5 => we recursively established relationship between them
        **/
        const otherEqs = map[source];
        
        if (dest in otherEqs) {
            return map[source][dest] * product;
        }
        
        for (let currRelation in otherEqs) {
            if (visitedMapCurrent[currRelation]) {
                continue;
            }
            
            const resultcheck = checkChain(currRelation, dest, map[source][currRelation] * product);            
            if (resultcheck !== -1) {
                return resultcheck;
            }
        }
        
        /* No relationship could be established */
        return -1;
    }
    
    for(let i = 0; i < queries.length; i++) {
        const [qEqA, qEqB] = queries[i];
        
        if (!map[qEqA] || !map[qEqB]) {
            output.push(-1);
            continue;
        }
        
         if (map[qEqA][qEqB]) {
            output.push(map[qEqA][qEqB]);
            continue;
        }
        
         if (map[qEqB][qEqA]) {
            output.push(map[qEqB][qEqA]);
            continue;
        }
        
        /* Reset visited equation Map */
        visitedMapCurrent = { ...visitedMap };
        output.push(checkChain(qEqA, qEqB));
    }
    
    return output;
};

/**

equations: [["x1","x2"],["x2","x3"],["x3","x4"],["x4","x5"]];
values   : [3.0, 4.0, 5.0, 6.0];
queries. : [["x1","x5"],["x5","x2"],["x2","x4"],["x2","x2"],["x2","x9"],["x9","x9"]]

*/