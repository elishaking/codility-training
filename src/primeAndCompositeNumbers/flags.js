/**
 * A peak is an array element which is larger than its neighbours.
 * More precisely, it is an index P such that 0 < P < N − 1 and A[P − 1] < A[P] > A[P + 1].
 *
 * Flags can only be set on peaks. What's more, if you take K flags,
 * then the distance between any two flags should be greater than or
 * equal to K. The distance between indices P and Q is the absolute value  P − Q|
 *
 * Given a non-empty array A of N integers, returns the maximum number
 * of flags that can be set on the peaks of the array.
 *
 * Detected time complexity: O(N)
 * @param {number[]} A
 */
function solution(A) {
  const peakIndexes = new Array(A.length).fill(-1);
  let peaks = 0;
  let firstPeak = -1;

  for (let i = A.length - 2; i > 0; i--) {
    if (A[i] > A[i + 1] && A[i] > A[i - 1]) {
      peakIndexes[i] = i;
      peaks++;
      firstPeak = i;
    } else {
      peakIndexes[i] = peakIndexes[i + 1];
    }
  }

  if (peaks < 2) return peaks;

  let nFlags = 1;

  for (let i = Math.floor(Math.sqrt(A.length)) + 1; i > 0; i--) {
    let flagsSet = 1;
    let flagsLeft = i - 1;
    let pos = firstPeak;

    while (flagsLeft > 0) {
      if (pos + i >= A.length - 1 || peakIndexes[pos + i] === -1) break;

      pos = peakIndexes[pos + i];

      flagsSet++;
      flagsLeft--;
    }
    nFlags = Math.max(nFlags, flagsSet);
  }

  return nFlags;
}

module.exports = solution;
