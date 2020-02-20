
/**
 * Given an integer N and a non-empty array A consisting of M 
 * integers, returns a sequence of integers representing the values of the counters
 * **Detected time complexity: O(N + M)**
 * @param {number} N 
 * @param {number[]} A 
 */
function solution(N, A) {
  let counters = new Array(N).fill(0)
  let max = 0
  let upper = 0

  for (let i = 0; i < A.length; i++) {
    const k = A[i] - 1

    if (k + 1 === N + 1)
      upper = max
    else {
      counters[k] = Math.max(counters[k] + 1, upper + 1)

      if (counters[k] > max)
        max = counters[k]
    }
  }

  counters = counters.map(n => Math.max(n, upper))

  return counters
}

module.exports = solution
