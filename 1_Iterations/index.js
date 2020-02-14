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
