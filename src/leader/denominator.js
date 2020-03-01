/**
 * Given an array A consisting of N integers, returns index of any
 * element of array A in which the dominator of A occurs
 *
 * Detected time complexity: O(N*log(N)) or O(N)
 * @param {number[]} A
 */
function solution(A) {
  let count = 1;
  let maxCount = count;
  let item = A[0];

  const B = JSON.parse(JSON.stringify(A));

  A.sort();
  let prev = A[0];

  for (let i = 1; i <= A.length; i++) {
    if (A[i] === prev) {
      count++;
    } else {
      if (count > maxCount) {
        maxCount = count;
        item = A[i - 1];
      }
      prev = A[i];
      count = 1;
    }
  }

  return maxCount > A.length / 2 ? B.indexOf(item) : -1;
}

module.exports = solution;
