/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function(img) {
    const result = [];
    let rowArr = [],sum = 0,count = 1;
    for (let i = 0; i < img.length; i++) {
        for (let j = 0; j < img[0].length; j++) {
            sum += img[i][j];// Add the current pixel value to the sum

            // Conditions to check surrounding pixels and update count and sum
            // Condition 1
            if (img[i - 1] !== undefined && img[i - 1][j - 1] !== undefined) {
                count += 1;
                sum += img[i - 1][j - 1];
            }

            // Condition 2
            if (img[i - 1] !== undefined && img[i - 1][j] !== undefined) {
                count += 1;
                sum += img[i - 1][j];
            }

            // Condition 3
            if (img[i - 1] !== undefined && img[i - 1][j + 1] !== undefined) {
                count += 1;
                sum += img[i - 1][j + 1];
            }

            // Condition 4
            if (img[i] !== undefined && img[i][j - 1] !== undefined) {
                count += 1;
                sum += img[i][j - 1];
            }

            // Condition 5
            if (img[i] !== undefined && img[i][j + 1] !== undefined) {
                count += 1;
                sum += img[i][j + 1];
            }

            // Condition 6
            if (img[i + 1] !== undefined && img[i + 1][j - 1] !== undefined) {
                count += 1;
                sum += img[i + 1][j - 1];
            }

            // Condition 7
            if (img[i + 1] !== undefined && img[i + 1][j] !== undefined) {
                count += 1;
                sum += img[i + 1][j];
            }

            // Condition 8
            if (img[i + 1] !== undefined && img[i + 1][j + 1] !== undefined) {
                count += 1;
                sum += img[i + 1][j + 1];
            }

            // Calculate the average and push it to the rowArr
            rowArr.push(Math.floor(sum / count))

            // Reset sum and count for the next pixel
            sum = 0;
            count = 1
        }

        result.push(rowArr)
        
        rowArr = []
    }
    return result;
};