/**
 *
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

console.log(solution([4, 3, 4, 4, 4, 2]));
