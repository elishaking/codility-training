/**
 * 
 * @param {number} X 
 * @param {number[]} A 
 */
function solution(X, A) {
  const positions = new Set()

  for (let i = 0; i < A.length; i++) {
    positions.add(A[i])

    if (positions.size === X)
      return i
  }

  return -1
}
