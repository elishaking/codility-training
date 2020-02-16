/**
 * 
 * @param {number[]} A 
 */
function solution(A) {
  const odd = []
  for (let i = 0; i < A.length; i++) {
    const idx = odd.indexOf(A[i])
    idx === -1 ? odd.push(A[i]) : odd.splice(idx, 1)
  }

  return odd[0]
}

function generateRandomIntArray(N, x0, x1) {
  const arr = []

  for (let i = 0; i < N; i++) {
    arr[i] = Math.round(x0 + Math.random() * x1)
  }

  return arr
}

const y = generateRandomIntArray(1000000, 0, 100000)
let t0 = Date.now()
const odd = solution(y)
console.log(`odd: ${odd} time: ${(Date.now() - t0) / 1000}`)