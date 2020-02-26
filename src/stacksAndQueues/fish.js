/**
 *
 * @param {number[]} A
 * @param {number[]} B
 */
function solution(A, B) {
  let eaten = 0;
  for (let i = 0; i < A.length - 1; i++) {
    if (B[i] - B[i + 1] > 0) {
      if (A[i] !== -1 && A[i + 1] !== -1) {
        eaten++;
        if (A[i] > A[i + 1]) A[i + 1] = -1;
        else A[i] = -1;
      }

      [A[i], A[i + 1]] = [A[i + 1], A[i]];
      [B[i], B[i + 1]] = [B[i + 1], B[i]];
    }
  }

  for (let i = A.length - 1; i > 0; i--) {
    if (B[i] - B[i - 1] < 0) {
      if (A[i] !== -1 && A[i - 1] !== -1) {
        eaten++;
        if (A[i] > A[i - 1]) A[i - 1] = -1;
        else A[i] = -1;
      }

      [A[i], A[i - 1]] = [A[i - 1], A[i]];
      [B[i], B[i - 1]] = [B[i - 1], B[i]];
    }
  }

  return A.length - eaten;
}

console.log(solution([5, 3, 2, 1, 4], [0, 1, 0, 1, 0])); // [4, 3, 2, 1, 5], [0, 1, 0, 0, 0]
