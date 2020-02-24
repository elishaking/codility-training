/**
 *
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

console.log(solution([10, 50, 5, 1])); //[10, 2, 5, 1, 8, 20]]
