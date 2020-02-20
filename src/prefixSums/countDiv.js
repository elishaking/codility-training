/**
 * Computes number of integers divisible by k in range [a..b].
 * Detected time complexity: O(1)
 * @param {number} A 
 * @param {number} B 
 * @param {number} K 
 */
function solution(A, B, K) {
  let val = Math.floor((B / K)) - Math.floor((A / K))

  return val + ((A % K === 0) ? 1 : 0)
}

module.exports = solution