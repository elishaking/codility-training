/**
 * Given an array H of N positive integers specifying the height of a wall, returns
 * the minimum number of blocks needed to build it.
 *
 * Detected time complexity: O(N)
 * @param {number[]} H
 */
function solution(H) {
  const blockStack = new Array(H.length).fill(0);
  let nBlocks = 0;
  let pos = 0;

  for (let i = 0; i < H.length; i++) {
    while (pos > 0 && blockStack[pos - 1] > H[i]) pos--;

    if (pos <= 0 || blockStack[pos - 1] !== H[i]) {
      nBlocks++;
      blockStack[pos] = H[i];
      pos++;
    }
  }

  return nBlocks;
}

module.exports = solution;
