/**
 * Returns the smallest positive integer (greater than 0) that does not occur in A
 * Detected time complexity: O(N) or O(N * log(N))
 * @param {number[]} A 
 */
function solution(A) {
  A.sort((a, b) => a - b)

  let i = 0

  for (; A[i] < 1; i++) { }

  if (A[i] !== 1) return 1

  for (let j = i; j < A.length; j++) {
    const val = A[j] + 1
    if (val !== (A[j + 1]) && val < A[j + 1])
      return val
  }

  return A[A.length - 1] + 1
}

module.exports = solution
