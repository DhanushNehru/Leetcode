/**
 * @param {number[][]} points
 * @return {number}
 */
// Inorder to deal with precision problems we tried to use gcd but it is not needed
// const gcd = (a, b) => {
//   if (!b) {
//     return a;
//   }
//   return gcd(b, a % b);
// }

var maxPoints = function(points) {
    let count = 0, max = 0;
    // first we need to calculate the slope  (y2 – y1) / (x2 – x1)
    // For each point p, calculate its slope with other points and use a map to record how many points have same slope
    for(let i=0;i<points.length-1;i++){

        const hash = {}
        // We can use map also
        // const slopes = new Map();
        for(let j=i+1;j<points.length;j++){

            const yDiff = points[j][1] - points[i][1]
            const xDiff = points[j][0] - points[i][0]
  
            let slope = Infinity
            // Inorder to avoid divide by 0 we use this condition
            if (xDiff !== 0) {
                slope = yDiff / xDiff
            }
            hash[slope] = (hash[slope] == undefined) ?  1 : hash[slope] + 1
           
            if(count<hash[slope]){
                count=hash[slope]
            }

            // if (slopes.has(slope)) {
            //     slopes.set(slope, slopes.get(slope) + 1);
            // } else {
            //     slopes.set(slope, 1);
            // }
            // count = Math.max(count, slopes.get(slope));
        }
    }
    // since i,j points can also be taken into account we return the max count with +1
    return count+1;
};