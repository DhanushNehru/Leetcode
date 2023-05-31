var UndergroundSystem = function() {
    this.userMap = new Map();
    this.travelHistory = new Map();
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.userMap.set(id,[stationName,t])
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    let [boardedStation,boardingTime]=this.userMap.get(id);
    let arr;
    if(this.travelHistory.has(`${boardedStation}-${stationName}`)){
         arr = this.travelHistory.get(`${boardedStation}-${stationName}`);
    }else {
        this.travelHistory.set(`${boardedStation}-${stationName}`,new Array());
        arr = this.travelHistory.get(`${boardedStation}-${stationName}`);
    }
    arr.push(t-boardingTime)
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    let  totalDistance = this.travelHistory.get(`${startStation}-${endStation}`)

    let n=totalDistance.length;
    let sum=0;

    for(let i=0;i<totalDistance.length;i++) {
        sum+=totalDistance[i];
    }

    return  (sum % 1) > 0.5 ? Math.ceil(sum/n) : sum/n;
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */