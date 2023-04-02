/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
const binarySearch = ( spell, potions, success)=>{
    let l = 0, r = potions.length-1, mid;
    while(l<=r){
        mid = parseInt( (l+r)/2 );
        if( spell*potions[mid] < success ){
            l = mid+1;
        }else{
            r = mid-1;
        }
    }
    return l;
}

var successfulPairs = function(spells, potions, success) {
    let result = []
    const potionsLength = potions.length
    potions.sort((a,b)=>a-b)
    for(let i=0;i<spells.length;i++){
        const temp = binarySearch( spells[i], potions, success);
        result[i] = (temp == potionsLength)? 0 : potionsLength-temp;
    }
    return result;
};