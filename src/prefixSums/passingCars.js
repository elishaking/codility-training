
/**
 * 
 * @param {number[]} A 
 */
function solution(A) {
  let pairs = 0;
  let zeros = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] == 0)
      zeros++
    if (zeros > 0) {
      if (A[i] == 1) {
        pairs += zeros
        if (pairs > 1000000000)
          return -1
      }
    }
  }
  return pairs;
}
