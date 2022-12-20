/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const roomsList = {}
    for(const roomIndex in rooms){
        roomsList[roomIndex] = rooms[roomIndex]
    }
    // roomsList { '0': [ 1 ], '1': [ 2 ], '2': [ 3 ], '3': [] }
    
    // the first element is visted so index 0 in array is true
    const visited = [true]
    // room at index 0 is visited first
    const stackRoomsToVisit = [rooms[0]]

    // stackRoomsToVisit. [ [ 1 ] ]
    
    while(stackRoomsToVisit.length!=0){
        const outOfStackRoom = stackRoomsToVisit.pop()
        for(let i=0;i<outOfStackRoom.length;i++){
            const key = outOfStackRoom[i]
            if(!visited[key]){
                stackRoomsToVisit.push(rooms[key])
            }
            visited[key] = true;
        }

    }
    // stackRoomsToVisit  []
    // visited for true condition will be >> [ true, true, true, true ]
    // visited for false condition will be >> [ true, true, <1 empty item>, true ]
    return rooms.length === visited.filter((room) => !!room).length
};