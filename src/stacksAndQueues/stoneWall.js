/**
 *
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

console.log(solution([8, 8, 5, 7, 9, 8, 7, 4, 8]));
