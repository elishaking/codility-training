/**
 * Given two non-empty arrays A and B consisting of N integers,
 * returns the number of fish that will stay alive
 *
 * Detected time complexity: O(N)
 * @param {number[]} A
 * @param {number[]} B
 */
function solution(A, B) {
  const UPSTREAM = 0;

  const fishStack = [];
  fishStack.push({
    size: A[0],
    direction: B[0]
  });

  for (let i = 1; i < A.length; i++) {
    if (B[i] === fishStack[fishStack.length - 1].direction) {
      fishStack.push({
        size: A[i],
        direction: B[i]
      });
    } else if (fishStack[fishStack.length - 1].direction === UPSTREAM) {
      fishStack.push({
        size: A[i],
        direction: B[i]
      });
    } else {
      while (fishStack.length !== 0) {
        if (fishStack[fishStack.length - 1].direction === B[i]) {
          fishStack.push({
            size: A[i],
            direction: B[i]
          });
          break;
        } else {
          if (fishStack[fishStack.length - 1].size > A[i]) {
            break;
          } else {
            fishStack.pop();
            continue;
          }
        }
      }
      if (fishStack.length === 0) {
        fishStack.push({
          size: A[i],
          direction: B[i]
        });
      }
    }
  }
  return fishStack.length;
}

module.exports = solution;
