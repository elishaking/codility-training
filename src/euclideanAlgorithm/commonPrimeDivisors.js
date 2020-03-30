/**
 *
 * @param {number[]} A
 * @param {number[]} B
 */
function solution(A, B) {
  /**
   * Calculates greatest common divisor
   * @param {number} a
   * @param {number} b
   */
  const gcd = (a, b) => {
    if (a % b === 0) return b;

    return gcd(b, a % b);
  };

  /**
   * Checks if the two numbers have the same prime divisors
   * @param {number} a
   * @param {number} b
   */
  const commonDivisors = (a, b) => {
    if (a === 0 && b === 0) return true;

    const g = gcd(a, b);

    while (a !== 1) {
      const ag = gcd(a, g);

      if (ag === 1) return false;

      a /= ag;
    }

    while (b !== 1) {
      const bg = gcd(b, g);

      if (bg === 1) return false;

      b /= bg;
    }

    return true;
  };

  let KPositions = 0;
  for (let i = 0; i < A.length; i++) {
    if (commonDivisors(A[i], B[i])) KPositions++;
  }

  return KPositions;
}

console.log(solution([15, 75], [75, 15]));
