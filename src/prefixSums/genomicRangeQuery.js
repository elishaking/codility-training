/**
 * Computes minimum in a given range
 * Detected time complexity: O(N + M)
 * @param {string} S
 * @param {number[]} P
 * @param {number[]} Q
 */
function solution(S, P, Q) {
  const prefixSums = [[0], [0], [0]];
  for (let i = 0; i < S.length; i++) {
    const [a, c, g] = [
      S[i] === "A" ? 1 : 0,
      S[i] === "C" ? 1 : 0,
      S[i] === "G" ? 1 : 0
    ];

    prefixSums[0][i + 1] = prefixSums[0][i] + a;
    prefixSums[1][i + 1] = prefixSums[1][i] + c;
    prefixSums[2][i + 1] = prefixSums[2][i] + g;
  }

  const M = [];
  for (let i = 0; i < P.length; i++) {
    const p0 = P[i],
      p1 = Q[i] + 1;

    if (prefixSums[0][p1] - prefixSums[0][p0] > 0) M[i] = 1;
    else if (prefixSums[1][p1] - prefixSums[1][p0] > 0) M[i] = 2;
    else if (prefixSums[2][p1] - prefixSums[2][p0] > 0) M[i] = 3;
    else M[i] = 4;
  }

  return M;
}

module.exports = solution;
