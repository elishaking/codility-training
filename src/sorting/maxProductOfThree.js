/**
 * Returns maximum triplet product
 * Detected time complexity: O(N * log(N))
 * @param {number[]} A
 */
function solution(A) {
  A.sort((a, b) => a - b);

  const N = A.length;
  let P = A[N - 1];
  let Q = 0,
    R = 0;
  if (P < 0) {
    Q = A[N - 2];
    R = A[N - 3];
  } else {
    if (Math.abs(A[0]) > A[N - 2] && A[1] < 0) {
      Q = A[0];
      R = A[1];
    } else {
      Q = A[N - 2];
      R = A[N - 3];
    }
  }

  return P * Q * R;
}

module.exports = solution;
