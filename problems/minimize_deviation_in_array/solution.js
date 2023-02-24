/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeviation = function(nums) {
  // https://github.com/datastructures-js/priority-queue
  const mpq = new MaxPriorityQueue();
  
  // Convert all the numbers to even and enqueue them
  nums.forEach((num) => {
    if (num % 2 !== 0) {
      const value = num * 2;
      
      mpq.enqueue(value, value);
    } else {
      mpq.enqueue(num, num);
    }
  });

  // Get difference between max and min values
  let deviation = mpq.front().element - mpq.back().element;
  
  // Loop until we have any max even number left in the queue
  while(mpq.front().element % 2 === 0) {
    // Get max even value
    const { element } = mpq.dequeue();
	
	// Convert it to odd number and enqueue again
    mpq.enqueue(element/2, element/2);
    
	// Get minimum between previous deviation and after above conversion
    deviation = Math.min(deviation, mpq.front().element - mpq.back().element);
  }
  
  return deviation;
};