/**
 * Given an array A consisting of N integers, returns 1 if
 * there exists a triangular triplet for this array and
 * returns 0 otherwise
 * Detected time complexity: O(N*log(N))
 * @param {number[]} A
 */
function solution(A) {
  A.sort((a, b) => a - b);

  for (let i = 0; i < A.length - 2; i++) {
    const [P, Q, R] = [i, i + 1, i + 2];

    if (A[P] + A[Q] > A[R] && A[Q] + A[R] > A[P] && A[R] + A[P] > A[Q])
      return 1;
  }

  return 0;
}

module.exports = solution;
