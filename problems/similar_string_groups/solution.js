/**
 * @param {string[]} strs
 * @return {number}
 */
var numSimilarGroups = function(strs) {
  const l = strs.length, strl = strs[0].length;
  const used = Array(l).fill(false);
  const queue = [];
  let res = 0, cur, diff;

  for (let i = 0; i < l; i++) {
    if (!used[i]) {
      res++;
      queue.push(strs[i]);
    }

    while (queue.length > 0) {
      cur = queue.pop();
      for (let j = 0; j < l; j++) {
        if (!used[j]) {

          // check cur and strl is similar or not
          // if diff > 2: they are not similar, otherwise: add strs[j] into queue
          diff = 0;
          for (let k = 0; k < strl; k++) {
            if(cur[k] !== strs[j][k] && ++diff > 2) break;
          }
          if (diff <= 2) {
            used[j] = true;
            queue.push(strs[j]);
          }
        }
      }
    }
  }

  return res;
};