/**
 * Given an array A consisting of N integers, returns the maximum
 * sum of any slice of A
 *
 * Detected time complexity: O(N)
 * @param {number[]} A
 */
function solution(A) {
  let sum = A[0],
    maxSlice = A[0];

  for (let i = 1; i < A.length; i++) {
    sum = Math.max(A[i], sum + A[i]);
    maxSlice = Math.max(maxSlice, sum);
  }

  return maxSlice;
}

module.exports = solution;
