/**
 * Given a positive integer N, Computes the length of its longest binary gap. 
 * Returns 0 if N doesn't contain a binary gap
 * @param {number} N 
 */
function solution(N) {
  const binary = N.toString(2)

  let aug = binary
  do {
    aug = aug
      .replace(/010/g, '0110')
  } while (aug.match(/010/g))


  const gaps = aug.match(/10+1/g)

  return gaps ? Math.max(
    ...gaps
      .map((val) => val.length - 2)
  ) : 0
}
