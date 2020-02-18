/**
 * 
 * @param {number[]} A 
 */
function solution(A) {
  let sumRight = 0, sumLeft = A[0]

  for (let i = 1; i < A.length; i++)
    sumRight += A[i]

  let diff = sumLeft - sumRight
  let meanDiff = Math.abs(diff)

  for (let p = 1; p < A.length; p++) {
    diff += (2 * A[p])
    let val = Math.abs(diff)

    if (val < meanDiff)
      meanDiff = val
  }

  return meanDiff
}

const t0 = Date.now()
const y = solution([3, 1, 2])  // [3,1,2,4,3]
console.log(`val: ${y} time: ${(Date.now() - t0) / 1000}`)