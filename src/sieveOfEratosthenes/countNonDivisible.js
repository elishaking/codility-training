/**
 * Given an array A consisting of N integers, returns a sequence
 * of integers representing the amount of non-divisors
 *
 * Detected time complexity: O(N * log(N))
 * @param {number[]} A
 */
function solution(A) {
  const count = new Array(A.length * 2 + 1).fill(0);

  for (let i = 0; i < A.length; i++) {
    count[A[i]] = count[A[i]] ? count[A[i]] + 1 : 1;
  }

  const divisor = new Array(A.length * 2 + 1).fill(0);
  for (let i = 1; i * i < divisor.length; i++) {
    for (let j = i * i; j < divisor.length; j += i) {
      divisor[j] += count[i];
      if (j !== i * i) {
        divisor[j] += count[Math.floor(j / i)];
      }
    }
  }

  const nonDivisible = new Array(A.length);
  for (let i = 0; i < nonDivisible.length; i++) {
    nonDivisible[i] = A.length - divisor[A[i]];
  }
  return nonDivisible;
}

module.exports = solution;
