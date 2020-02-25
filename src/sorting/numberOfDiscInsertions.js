/**
 *
 * @param {number[]} A
 */
function solution(A) {
  const discs = [];
  for (let i = 0; i < A.length; i++) {
    discs.push({
      leftPos: i - A[i],
      rightPos: i + A[i]
      //   center: i
    });
  }

  discs.sort((d1, d2) => {
    if (d1.leftPos < d2.leftPos) return -1;
    if (d2.leftPos < d1.leftPos) return 1;
    if (d1.rightPos < d2.rightPos) return -1;
    if (d2.rightPos < d1.rightPos) return 1;

    return 0;
  });

  let intersections = 0;
  for (let i = 0; i < discs.length - 1; i++) {
    for (let j = i + 1; j < discs.length; j++) {
      if (discs[i].rightPos >= discs[j].leftPos) {
        intersections++;

        if (intersections > 10000000) return -1;
      } else break;
    }
  }

  return intersections;
}

const x = new Array(100000).fill(0); //.map((_, i) => i);

const t0 = Date.now();
const y = solution(x); //[1, 5, 2, 1, 4, 0]
console.log(`val: ${y} time: ${(Date.now() - t0) / 1000}`);
