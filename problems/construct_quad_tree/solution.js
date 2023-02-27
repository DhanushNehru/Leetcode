/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = function(grid) {
    const len = grid.length;
    
    function split(matrix) {
        const [[rowStart, colStart], [rowEnd, colEnd]] = matrix;
        const halfWidth = (rowEnd - rowStart) / 2 
        const midRow = rowStart + halfWidth;
        const midCol = colStart + halfWidth;
        
        const topLeft = [[rowStart, colStart], [midRow, midCol]];
        const topRight = [[rowStart, midCol], [midRow, colEnd]];
        const bottomLeft = [[midRow, colStart], [rowEnd, midCol]];
        const bottomRight = [[midRow, midCol], [rowEnd, colEnd]]
        
        return {topLeft, topRight, bottomLeft, bottomRight}
    }
    
    function recurse(matrix) {
        const [[rowStart, colStart], [rowEnd, colEnd]] = matrix;
        
        if(rowEnd - rowStart === 1) return new Node(grid[rowStart][colStart], true)
        
        const {topLeft, topRight, bottomLeft, bottomRight} = split(matrix);
        
        const nodeTL = recurse(topLeft);
        const nodeTR = recurse(topRight);
        const nodeBL = recurse(bottomLeft);
        const nodeBR = recurse(bottomRight);
        
        // if all 4 quadrants are leaf nodes and have the same value 
        // they can be merge into one quadrant
        if(nodeTL.isLeaf && nodeTR.isLeaf && nodeBL.isLeaf && nodeBR.isLeaf && 
           (nodeTL.val === nodeTR.val && nodeTR.val === nodeBL.val && nodeBL.val === nodeBR.val))  {
            return new Node(nodeTL.val, true);
        }
        return new Node(false, false, nodeTL, nodeTR, nodeBL, nodeBR);
    }
    return recurse([[0, 0], [len, len]])
};