/**
 * A non-empty array A consisting of N integers is given.
 * A triplet (X, Y, Z), such that 0 ≤ X < Y < Z < N, is called
 * a double slice. The sum of double slice (X, Y, Z) is the total
 * of A[X + 1] + A[X + 2] + ... + A[Y − 1] + A[Y + 1] + A[Y + 2] + ... + A[Z − 1]
 *
 * Given a non-empty array A consisting of N integers, returns
 * the maximal sum of any double slice
 *
 * Detected time complexity: O(N)
 * @param {number[]} A
 */
function solution(A) {
  const maxSlicesRight = new Array(A.length).fill(0);
  const maxSlicesLeft = new Array(A.length).fill(0);

  for (let i = 1; i < A.length - 1; i++) {
    maxSlicesRight[i] = Math.max(maxSlicesRight[i - 1] + A[i], 0);
  }

  for (let i = A.length - 2; i > 0; i--) {
    maxSlicesLeft[i] = Math.max(maxSlicesLeft[i + 1] + A[i], 0);
  }

  let maxSum = 0;
  for (let i = 1; i < A.length - 1; i++) {
    maxSum = Math.max(maxSum, maxSlicesRight[i - 1] + maxSlicesLeft[i + 1]);
  }

  return maxSum;
}

const y = [3, 2, 6, -1, 100, 10, 100, 2];
console.log(solution(y));
module.exports = solution;
