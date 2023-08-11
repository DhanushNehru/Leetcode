/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
// Dynamic Programming
var change = function(amount, coins) {
    // create array with initial 0
    // +1 extra space is for $0
    changeMethodCount = new Array(amount+1).fill( 0 ); 
    
    // Base case:
	changeMethodCount[0] = 1;                    // $0 is reached by taking no coins
    
    // General cases:
    for(const coin of coins){
        for( let smallAmount = coin ; smallAmount <= amount ; smallAmount++ ){
            
            changeMethodCount[smallAmount] +=  changeMethodCount[smallAmount - coin ];
        }       
    }
    
    return changeMethodCount[ amount ];    
};