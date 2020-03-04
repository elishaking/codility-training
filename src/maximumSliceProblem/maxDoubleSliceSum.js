/**
 *
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

const y = [3, 2, 6, -1, 4, 5, -1, 2];
console.log(solution(y));
