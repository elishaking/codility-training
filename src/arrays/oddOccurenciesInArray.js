/**
 * Returns the value of the unpaired element
 * Detected time complexity: O(N) or O(N*log(N))
 * @param {number[]} A 
 */
function solution(A) {
  A.sort((a, b) => a - b)
  for (let i = 0; i < A.length; i += 2) {
    if (A[i] !== A[i + 1])
      return A[i]
  }
}

module.exports = solution
