/**
 * A non-empty array A consisting of N integers is given.
 * The leader of this array is the value that occurs in more than half of the elements of A.
 *
 * An equi leader is an index S such that 0 ≤ S < N − 1 and two sequences
 * A[0], A[1], ..., A[S] and A[S + 1], A[S + 2], ..., A[N − 1] have leaders of the same value
 *
 * Given a non-empty array A consisting of N integers, returns the number of equi leaders.
 *
 * Detected time complexity: O(N)
 * @param {number[]} A
 */
function solution(A) {
  let aLeader = false,
    leader = A[0];
  const leaders = {};

  if (A.length < 2) return 0;

  for (let i = 0; i < A.length; i++) {
    const num = A[i];
    if (leaders[num]) {
      leaders[num][1]++;

      if (leaders[num][1] > A.length / 2) {
        aLeader = true;
        leader = A[i];
      }
    } else {
      leaders[num] = [i, 1];
    }
  }

  if (!aLeader) return 0;

  let l = 0,
    k = leaders[leader][1];
  let nEquiLeaders = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] === leader) {
      l++;
      k--;
    }

    if (l > (i + 1) / 2 && k > (A.length - i - 1) / 2) nEquiLeaders++;
  }

  return nEquiLeaders;
}

module.exports = solution;
