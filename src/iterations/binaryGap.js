/**
 * Given a positive integer N, Computes the length of its longest binary gap.
 * Returns 0 if N doesn't contain a binary gap
 * @param {number} N
 */
function solution(N) {
  let binary = N.toString(2).split("");

  // remove trailing zeros
  for (let i = binary.length - 1; i > 0; i--) {
    if (binary[i] === "0") binary[i] = "_";

    if (binary[i] === "1") break;
  }

  let binaryStr = binary.filter((d) => d !== "_").join("");

  const gapLengths = binaryStr.split("1").map((gap) => gap.length);
  return Math.max(...gapLengths);
}

/**
 * Time Complexity: O(N)
 * @param {number} N
 */
function solution2(N) {
  const M = N.toString(2);
  let countMax = 0;
  let count = 0;

  for (let i = 0; i < M.length; i++) {
    if (M[i] === "1") {
      if (count > countMax) countMax = count;
      count = 0;
    } else if (M[i] === "0") count++;
  }

  return countMax;
}

module.exports = solution;
