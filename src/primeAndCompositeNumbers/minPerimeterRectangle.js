/**
 *
 * @param {number} N
 */
function solution(N) {
  let minPerimeter = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < Math.sqrt(N); i++) {
    if (N % i === 0) minPerimeter = Math.min(minPerimeter, 2 * (N / i + i));
  }

  return minPerimeter;
}

console.log(solution(30));
