/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
     let q = []
    
    for(let i =0; i<grid.length;i++){
        for(let j =0; j<grid[0].length;j++){
            if(grid[i][j] == 1) q.push([i,j,0])
        }
    }
    let max = 0;
    let dir = [[-1,0],[1,0],[0,1],[0,-1]]

    while(q.length>0){
        let [r,c,count] = q.shift()

        max = Math.max(max,count)

        for(let d of dir){
            let [dx,dy] = d
            let x = r + dx;
            let y = c + dy;

            if(x<0 || x>=grid.length || y<0 || y>=grid[0].length) continue;
            if(grid[x][y] == 1) continue;

            q.push([x,y,count+1])
            grid[x][y] = 1;
        }
    }

    return max == 0 ? -1 : max;
};