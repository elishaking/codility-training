/**
 * Returns 1 if array A is a permutation and 0 if it is not
 * Detected time complexity: O(N) or O(N * log(N))
 * @param {number[]} A 
 */
function solution(A) {
  if (A.length === 0) return 0
  if (A.length === 1 && A[0] !== 1) return 0

  A.sort((a, b) => a - b)

  if (A[0] !== 1) return 0

  for (let i = 0; i < A.length - 1; i++) {
    if (A[i] !== (A[i + 1] - 1))
      return 0

  }

  return 1
}
