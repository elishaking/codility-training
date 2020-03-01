/**
 * Given a string S consisting of N characters, returns 1 if string S is
 * properly nested and 0 otherwise
 *
 * Detected time complexity: O(N)
 * @param {string} S
 */
function solution(S) {
  let open = 0;

  for (let i = 0; i < S.length; i++) {
    if (S[i] === "(") open++;
    else if (S[i] === ")") open--;

    if (open < 0) return 0;
  }

  return open === 0 ? 1 : 0;
}

module.exports = solution;
