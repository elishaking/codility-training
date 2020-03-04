/**
 *
 * @param {number[]} A
 */
function solution(A) {
  let maxProfit = 0,
    currentMin = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < A.length; i++) {
    currentMin = Math.min(currentMin, A[i]);
    maxProfit = Math.max(maxProfit, A[i] - currentMin);
  }

  return maxProfit;
}

console.log(solution([23171, 21011, 21123, 21366, 21013, 21367]));
