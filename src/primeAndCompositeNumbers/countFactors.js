/**
 * Given a positive integer N, returns the number of its factors
 *
 * Detected time complexity: O(sqrt(N))
 * @param {number} N
 */
function solution(N) {
  let nFactors = 0;
  let i = 1;

  for (; i * i < N; i++) {
    if (N % i === 0) nFactors += 2;
  }

  if (i * i === N) nFactors += 1;

  return nFactors;
}

module.exports = solution;
