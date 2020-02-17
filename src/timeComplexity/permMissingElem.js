/**
 * Finds the missing element
 * Detected time complexity: O(N) or O(N * log(N))
 * @param {number[]} A 
 */
function solution(A) {
  A.sort((a, b) => a - b)

  if (A[0] !== 1)
    return 1

  for (let i = 0; i < A.length; i++) {
    if (A[i] !== A[i + 1] - 1)
      return A[i] + 1
  }
}

module.exports = solution