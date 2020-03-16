/**
 * A peak is an array element which is larger than
 * its neighbors. More precisely, it is an index P such
 * that 0 < P < N − 1,  A[P − 1] < A[P] and A[P] > A[P + 1]
 *
 * Given a non-empty array A consisting of N integers, returns the
 * maximum number of blocks into which A can be divided where each
 * block has exactly one peak
 *
 * Notice that extreme elements of the blocks (for example A[K − 1] or A[K])
 * can also be peaks, but only if they have both neighbors
 * (including one in an adjacent blocks)
 *
 * Detected time complexity:O(N * log(log(N)))
 * @param {number[]} A
 */
function solution(A) {
  const peakIndexes = [];

  for (let i = 1; i < A.length - 1; i++) {
    if (A[i] > A[i - 1] && A[i] > A[i + 1]) peakIndexes.push(i);
  }

  if (peakIndexes.length === 0) return 0;

  for (let i = peakIndexes.length; i > 0; i--) {
    if (A.length % i === 0) {
      let blockLength = A.length / i;
      let peaksInBlock = new Array(i).fill(0);
      let count = 0;

      for (let j = 0; j < peakIndexes.length; j++) {
        const pos = Math.floor(peakIndexes[j] / blockLength);

        if (peaksInBlock[pos] === 0) {
          peaksInBlock[pos] = 1;
          count++;
        }
      }

      if (count === i) return i;
    }
  }

  return 0;
}

module.exports = solution;
