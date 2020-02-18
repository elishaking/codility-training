/**
 * 
 * @param {number[]} A 
 */
function solution(A) {
  let meanDiff = Number.POSITIVE_INFINITY

  for (let p = 1; p < A.length; p++) {
    let diff = 0
    for (let i = 0; i < A.length; i++) {
      diff = i < p ? diff + A[i] : diff - A[i]
    }
    diff = Math.abs(diff)

    if (diff < meanDiff)
      meanDiff = diff
  }

  return meanDiff
}

const t0 = Date.now()
const y = solution(new Array(100000).fill(1000))  // [3,1,2,4,3]
console.log(`val: ${y} time: ${(Date.now() - t0) / 1000}`)