/**
 * 
 * @param {number} A 
 * @param {number} B 
 * @param {number} K 
 */
function solution(A, B, K) {
  let divisibleCount = 0
  let delta = 1

  for (let i = A; i <= B; i += delta) {
    if (i % K === 0) {
      divisibleCount++
      delta = K
    }
  }

  return divisibleCount
}

const t0 = Date.now()
// const y = solution(6, 11, 2)
const y = solution(0, 2000000000, 1)
console.log(`val: ${y} time: ${(Date.now() - t0) / 1000}`)