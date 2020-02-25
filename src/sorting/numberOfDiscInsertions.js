/**
 *
 * @param {number[]} A
 */
function solution(A) {
  let intersections = 0;
  for (let j = 0; j < A.length; j++) {
    for (let k = 0; k < A.length; k++) {
      if (k < j && k + A[k] >= j - A[j]) {
        intersections++;
      } else if (k > j && k - A[k] <= j + A[j]) {
        intersections++;
      }

      if (intersections / 2 > 10000000) return -1;
    }
  }

  return intersections / 2;
}

const x = new Array(100000).fill(0);

const t0 = Date.now();
const y = solution(x); //[2, 1, 1, 2, 3, 1]
console.log(`val: ${y} time: ${(Date.now() - t0) / 1000}`);
