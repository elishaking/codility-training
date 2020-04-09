/**
 * Two positive integers N and M are given. Integer N represents the number of chocolates
 * arranged in a circle, numbered from 0 to N − 1.
 *
 * You start to eat the chocolates. After eating a chocolate you leave only a wrapper.
 *
 * You begin with eating chocolate number 0. Then you omit the next M − 1 chocolates
 * or wrappers on the circle, and eat the following one.
 *
 * You stop eating when you encounter an empty wrapper.
 *
 * Given two positive integers N and M, returns the number of chocolates that you will eat.
 *
 * Detected time complexity: O(log(N + M))
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

module.exports = solution;
