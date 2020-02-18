/**
 * calculates minimal split difference
 * Detected time complexity: O(N)
 * @param {number[]} A 
 */
function solution(A) {
  let sumRight = 0, sumLeft = A[0]

  for (let i = 1; i < A.length; i++)
    sumRight += A[i]

  let diff = sumLeft - sumRight
  let meanDiff = Math.abs(diff)

  for (let p = 1; p < A.length - 1; p++) {
    diff += (2 * A[p])
    let val = Math.abs(diff)

    if (val < meanDiff)
      meanDiff = val
  }

  return meanDiff
}

module.exports = solution
