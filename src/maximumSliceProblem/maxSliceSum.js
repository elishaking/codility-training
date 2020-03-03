/**
 *
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

console.log(solution([3, 2, -6, 4, 0]));
