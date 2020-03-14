/**
 *
 * @param {number} N
 */
function solution(N) {
  let minPerimeter = Number.MAX_SAFE_INTEGER;

  if (N === 1) return 4;

  for (let i = 1; i <= Math.sqrt(N); i++) {
    if (N % i === 0) minPerimeter = Math.min(minPerimeter, 2 * (N / i + i));
  }

  return minPerimeter;
}

console.log(solution(100000000));
