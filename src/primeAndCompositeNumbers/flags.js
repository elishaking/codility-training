/**
 *
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

console.log(solution([1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]));
