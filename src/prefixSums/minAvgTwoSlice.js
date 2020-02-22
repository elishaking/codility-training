/**
 * Calculate minimum average
 * Detected time complexity: O(N)
 * @param {number[]} A
 */
function solution(A) {
  const prefixSums = [0];

  for (let i = 0; i < A.length; i++) {
    prefixSums[i + 1] = prefixSums[i] + A[i];
  }

  let min = Number.MAX_VALUE;
  let minIdx = 0;

  for (let i = 0; i < A.length - 1; i++) {
    let avg = (prefixSums[i + 2] - prefixSums[i]) / 2.0;

    if (avg < min) {
      min = avg;
      minIdx = i;
    }

    if (i < A.length - 2) {
      avg = (prefixSums[i + 3] - prefixSums[i]) / 3.0;

      if (avg < min) {
        min = avg;
        minIdx = i;
      }
    }
  }

  return minIdx;
}

module.exports = solution;
