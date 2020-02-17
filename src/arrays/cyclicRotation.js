/**
 * Rotates array A, K times
 * @param {number[]} A 
 * @param {number} K 
 */
function solution(A, K) {
  if (A.length === 0)
    return A

  for (let i = 0; i < K; i++) {
    const val = A.pop()
    A.unshift(val)
  }

  return A
}

module.exports = solution