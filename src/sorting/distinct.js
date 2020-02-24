/**
 *
 * @param {number[]} A
 */
function solution(A) {
  const count = new Set();

  for (let i = 0; i < A.length; i++) {
    count.add(A[i]);
  }

  return count.size;
}
