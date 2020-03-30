/**
 *
 * @param {number[]} A
 * @param {number[]} B
 */
function solution(A, B) {
  const primeDivisors = N => {
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

    const divisors = [];
    for (let i = 2; i < primeNumbersSieve.length; i++) {
      if (primeNumbersSieve[i] && N % i == 0) divisors.push(i);
    }

    return JSON.stringify(divisors);
  };

  let kPositions = 0;
  for (let i = 0; i < A.length; i++) {
    if (primeDivisors(A[i]) === primeDivisors(B[i])) kPositions++;
  }

  return kPositions;
}

console.log(solution([15, 75], [75, 15]));
