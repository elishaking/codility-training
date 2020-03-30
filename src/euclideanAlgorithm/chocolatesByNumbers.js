/**
 *
 * @param {number} N
 * @param {number} M
 */
function solution(N, M) {
  const gcd = (a, b) => {
    if (a % b === 0) return b;

    return gcd(b, a % b);
  };

  return N / gcd(N, M);
}

console.log(solution(10, 7));
