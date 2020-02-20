const solution = require('../src/prefixSums/countDiv')

describe('countDiv Unit Tests', () => {
  it('', () => {
    expect(solution(101, 123457000, 10000)).toEqual(12345)
    expect(solution(6, 11, 2)).toEqual(3)
    expect(solution(100, 123457000, 2)).toEqual(61728451)
    expect(solution(11, 345, 17)).toEqual(20)
  })
})
