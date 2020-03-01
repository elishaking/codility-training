/**
 *
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

console.log(solution([2, 1, 1, 1, 3])); //[1, 2, 5, 3, 5, 3, 3, 3, 3] [3, 4, 3, 2, 3, -1, 3, 3]
