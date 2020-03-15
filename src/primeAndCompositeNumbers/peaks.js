/**
 *
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

// console.log(solution([1, 2, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]));
console.log(solution([1, 3, 2, 1]));
