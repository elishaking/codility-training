/**
 * Given an integer N and two non-empty arrays P and Q consisting of M
 * integers, returns an array consisting of M elements specifying the
 * consecutive number of semi-primes in the range (P[i], Q[i])
 *
 * @param {number} N
 * @param {number[]} P
 * @param {number[]} Q
 *
 * Detected time complexity: O(N * log(log(N)) + M)
 */
function solution(N, P, Q) {
  const primeNumbersSieve = new Array(N + 1).fill(true);
  primeNumbersSieve[0] = primeNumbersSieve[1] = false;

  // sieve
  for (let i = 2; i * i <= N; i++) {
    if (primeNumbersSieve[i]) {
      let k = i * i;
      while (k <= N) {
        primeNumbersSieve[k] = false;
        k += i;
      }
    }
  }

  const primeNumbers = [];
  for (let i = 2; i < primeNumbersSieve.length; i++) {
    if (primeNumbersSieve[i]) primeNumbers.push(i);
  }

  const semiPrimes = new Array(N + 1).fill(0);

  for (let i = 0; i < primeNumbers.length - 1; i++) {
    for (let j = i; j < primeNumbers.length; j++) {
      const product = primeNumbers[i] * primeNumbers[j];
      if (product > N) break;

      semiPrimes[product] = 1;
    }
  }

  // prefix sums
  for (let i = 1; i < N + 1; i++) {
    semiPrimes[i] += semiPrimes[i - 1];
  }

  const semiPrimesCount = new Array(Q.length).fill(0);

  for (let i = 0; i < Q.length; i++) {
    semiPrimesCount[i] = semiPrimes[Q[i]] - semiPrimes[P[i] - 1];
  }

  return semiPrimesCount;
}

module.exports = solution;
