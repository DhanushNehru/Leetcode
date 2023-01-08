/**
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */

const timeToInteger = (times) => {
    const time = times.split(":") 
    return (parseInt(time[0])*100) + parseInt(time[1])
}

var haveConflict = function(event1, event2) {
  if( (timeToInteger(event1[1]) >= timeToInteger(event2[0]))  &&  (timeToInteger(event1[0]) <= timeToInteger(event2[1]))){
      return true
  }
  else{
      return false
  }
};