/**
 * Given an array A consisting of N integers, returns the
 * number of distinct values in array A
 * Detected time complexity: O(N*log(N)) or O(N)
 * @param {number[]} A
 */
function solution(A) {
  const count = new Set();

  for (let i = 0; i < A.length; i++) {
    count.add(A[i]);
  }

  return count.size;
}

module.exports = solution;
