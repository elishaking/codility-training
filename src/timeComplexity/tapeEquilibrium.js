/**
 * 
 * @param {number[]} A 
 */
function solution(A) {
  let meanDiff = 0

  for (let p = 1; p < A.length; p++) {
    const left = A.slice(0, p)
    const right = A.slice(p)

    const diff = Math.abs(left.reduce((total, n) => total + n, 0) - right.reduce((total, n) => total + n, 0))

    if (diff < meanDiff)
      meanDiff = diff
  }

  return meanDiff
}

const t0 = Date.now()
const y = solution(new Array(10000).fill(10))
console.log(`val: ${y} time: ${(Date.now() - t0) / 1000}`)